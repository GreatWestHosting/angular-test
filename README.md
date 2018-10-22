# ang-test

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

It hass been extended to use a NodeJS 

## Environment

The default [JSLint](https://www.jslint.com/) tools used by Brackets is too opinionated and restrictive for modern NodeJS development.

Alternatives include ESLint and [JSHint](https://jshint.com). ESLint has some issues, JSLint is currently used by Bill and currently configured for this project

Configuration of the JSHint engine is via the .jshintrc file automatically included in the yo generated project. Adding the JSHint extension for brackets is relatively easy. 

```
   "language": {
        "javascript": {
            "linting.prefer": [
                "JSHint"
            ],
            "linting.usePreferredOnly": true
        }
    },
```
Is added to brackets.json to enable the JSHint engine

 
## Build & Development

Run `grunt` for building and `grunt serve` for preview.

Note that grunt does not seem to run bower so the correct sequence is 

```
npm install
bower install
grunt
grunt serve
```

Note that grunt serve will only serve the source files, not the compiled files
Running ```grunt serve:dist``` changes the run target and forces a build to occur

## Testing

Running `grunt test` will run the unit tests with karma.


## Fixes

### Some dependencies have changed, the following will repair them

```
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
```

See https://github.com/yeoman/generator-angular/issues/1230

### URLs are being mangled with  extraneous '%2F'. 
The fix is to change URL's from 1.5.8 behavior '#/' to the new 1.6 preferred method '#!/'
Note that the ! mark is to indicate server side vs client side processing (URL to left of ! is server processed, right is client side view)

See discussion at https://stackoverflow.com/questions/41272314/angularjs-all-slashes-in-url-changed-to-2f
Also documented https://docs.angularjs.org/guide/migration#migrating-from-1-5-to-1-6

## NodeJS Integration

We want to run nodejs after grunt builds the directory, and have grunt continually update the dist folder
The *postinstall* npm task seems to fit the bill, by adding postinstall to scripts under package.json


