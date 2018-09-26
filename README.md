# ang-test

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & Development

Run `grunt` for building and `grunt serve` for preview.

Note that grunt does not seem to run bower so the correct sequence is 

```
npm install
bower install
grunt
grunt serve
```

## Testing

Running `grunt test` will run the unit tests with karma.


## Fixes

### Some depenedncies have changed, the following will repair them

```
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
```

See https://github.com/yeoman/generator-angular/issues/1230

### URLs are being mangled with  extraneous '%2F'. 
The fix is to change URL's from 1.5.8 behaviour '#/' to the new 1.6 preferered method '#!/'
Note that the ! mark is to indicate server side vs client side processing (URL to left of ! is server processed, right is client side view)

See discussion at https://stackoverflow.com/questions/41272314/angularjs-all-slashes-in-url-changed-to-2f
Also documented https://docs.angularjs.org/guide/migration#migrating-from-1-5-to-1-6


