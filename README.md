Cordova-Angular-Browserify Workflow
===================================

* [Grunt](http://gruntjs.com/) used for automation.
* Uses [Ionic](http://ionicframework.com/) for out of the box components.
* Bundled using [Browserify](http://browserify.org/)!
* All dependencies managed via [npm](https://www.npmjs.org/)
* Sensible and/or common Cordova defaults applied.
* Uses [ngCordova](http://ngcordova.com/) to ensure sensible and stable
 Cordova plugin use.
* Test structure for AngularJS is already setup and ready.
* Run tests in browser with Karma or from a webserver on your machine!
* Code Quality via [JSHint](http://www.jshint.com/docs/), 
[Lintspaces](lintspaces) and Column Width Checks.
* [EditorConfig](http://editorconfig.org/) file included to automatically 
configure editors.
* Localised Cordova version setup to avoid version mismatches.

## Current Project Issues / Tasks


## Why?

This repository is intended to provide as base structure for starting 
and working with a Cordova application. It uses AngularJS as an application 
framework and Browserify is used to compile the application into a single 
bundle. This aids rapid development by allowing the developer to focus on 
writing code in the _www_ directory and having automation handle updating their 
bundled JavaScript and index.html.


## What do we get!?

### Code Structure
Using EditorConfig, Lintspaces, and JSHint enforces better code quality and 
ensures higher standards. Keep them included and be stringent!

### Manging Cordova Correctly
Many Cordova projects I've worked on assume you have Cordova installed globally 
and will use that to do builds causing a major headache due to version 
mismatches. Building should be accomplished by using a localised Cordova 
version installed as part of the project and as a result this project has a 
relative symbolic link setup to accomplish this. Simply use _./cordova_ in the 
root of this project to perform all Cordova tasks as this will use the version 
installed locally in the _node_modules_ folder.

### Angular Friendly Cordova Plugin Interfaces
Cordova plugins are awesome as they allow you to use native functionality via 
JavaScript calls! The issue is that in AngularJS applications we need to call 
out to these APIs using the JavaScript lib provided by the developer and then 
ensure that changes applied in our callbacks are applied correctly within the 
Angular lifecycle. Using ngCordova is an excellent way to resolve this issue 
and provide a simple interface to these plugins without the need to write our
own wrappers. Bear in mind ngCordova is a _very_ young project and if 
functionality you'd like is missing then fork it, add the function and submit 
a pull request!

### A Single JavaScript Bundle
Part of the reason for using Browserify in this project is for speed 
enhancements. Compiling all files into a single bundle will improve application 
load time and performance. For release builds the bundle file can have source 
maps disabled and also be uglified to further improve performance and reduce 
the disk space required by the compiled project.

### Inlined Templates for Improved Performance
Another neat feature I want to encourage as part of this project is inlining 
templates within your AngularJS application. You should do this using 
_brfs_ as shown in the example below, Browserify and the Grunt build will 
handle the rest. This removes AJAX/File calls when your application is running 
and will improve performance. The only caveat is that the transform that 
inlines the template expects the format *__dirname + '/some/path.extname'* or 
*__filename + '/some/path.extname'*. 


```javascript
'use strict';

var fs = require('fs');
var tmp = fs.readFileSync(__dirname + '/../../templates/RandomNumber.html'
  , 'utf8');

module.exports = function () {
  return {
    restrict: 'E',
    template: tmp,
    link: function link ($scope) {
      $scope.number = Math.round(Math.random() * 100);
    }
  }
};

```


## Setup 

Simply download the ZIP file of this repo and you're ready to rock. If you 
don't have Node.js, Less, or Bower installed read the next section.

### Prerequisites 
To use this project you need to have Node.js and npm installed. Get both in a 
single download [here](http://nodejs.org). This project setup was designed 
using Node version 0.10.24.


## Common Tasks
Note that all these commands are using the locally installed version of Cordova.
To change the Cordova version being use just run:

```
npm install cordova@[VERSION] --save-dev
```


### Copy Working www Files to Cordova Projects

```
./cordova prepare [ios/android]
```

### Compile Current Projects
```
./cordova compile [ios/android]
```

### Copy Files and Build
```
./cordova build [ios/android]
```

### Emulate Platforms
These functions are provided by Cordova. In the root directory use the 
following commands.

```
./cordova emulate [ios/android]
```


## Grunt Tasks
These are the current grunt tasks built into the Gruntfile.

### test
Running this task will automatically open a browser and run all tests in the 
*tests* directory using Karma.

### prepare:[debug | release]
This task will install all dependencies if required, browserify all source 
code into a single bundle.

If the release flag is used instead of debug then all CSS and JS are bundled 
and the *www/* folder is updated.

### build 
Run prepare and copy all files from *www/* to added Cordova platforms and 
compile. Basically *cordova build* with some extra sugar.

### format
Run code quality checks to find syntax errors, style issues, and highlight 
lines over 80 characters.

### serve
Serve code for local debugging. The code is "watched" meaning if any changes 
are made the 'build' task will be run and the code running in your browser 
will update without the need for a refresh.


## Debugging 
To make debugging this project easier you should enable source maps in your dev 
tools. This will allow you to inspect the source files in Chrome as usual on 
the _Sources_ tab despite the fact that the files and concatenated using 
Browserify. Much win!
