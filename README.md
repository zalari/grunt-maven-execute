# grunt-maven-execute

> Grunt maven execute - execute a provided maven goal.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-maven-execute --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-maven-execute');
```

### Overview

In your project's Gruntfile, add a section named `maven` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mavenExecute: {
    options: {
      goal: 'install',
      cwd: '../',
    }
  }
})
```

### Options


#### options.goal
Type `String`
Default: defaults to the (grunt) target name

The maven goal to execute, e.g. `install`

#### options.cwd
Type: `String`

The current working directory either relative to the working directory of Grunt itself, or an absolute path, that maven is execute in.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

And don't drink and derive.