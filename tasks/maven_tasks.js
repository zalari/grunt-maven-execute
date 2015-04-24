/*
 * grunt-maven-execute
 * https://github.com/zalari/grunt-maven-execute
 *
 * Copyright (c) 2015 Christian Ulbrich, Zalari UG (haftungsbeschränkt)
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('mavenExecute', 'Run a maven goal', function() {
    var options = this.options();

    //set default options
    options.goal = options.goal || this.target;
    //either use the passed cwd or set it to the current cwd
    options.cwd = options.cwd || process.cwd();

    //resolve relative paths to absolute
    if (grunt.file.isPathAbsolute(options.cwd) === false) {
      options.cwd = path.resolve(process.cwd(), options.cwd);
    }



    options.versionFile = options.versionFile || 'package.json';
    options.params = options.params || [];

    grunt.config.set('maven.options', options);

    grunt.task.run('mavenExecute:run');

  });


  grunt.registerTask('mavenExecute:run', function() {
    var options = grunt.config('maven.options');


    var args = [ options.goal ];

    //TODO: add params to pass to maven

    args = options.params;

    if (grunt.debug || options.debug) {
      args.push('-e');
      args.push('-X');
    }

    var done = this.async();
    var msg = 'Running maven with goal: ' + options.goal + '...';
    grunt.verbose.write(msg);
    grunt.log.debug('Running command "mvn ' + args.join(' ') + '"');
    grunt.util.spawn({ cmd: 'mvn', args: args, opts: {stdio: 'inherit', cwd: options.cwd} }, function(err, result, code) {
      if (err) {
        grunt.verbose.or.write(msg);
        grunt.log.error().error('Failed to run maven');
      } else {
        grunt.verbose.ok();
        grunt.log.writeln('Finished running maven.');
      }
      done(err);
    });
  });


};
