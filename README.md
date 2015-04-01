# cordova-plugin-filepath

This plugin allows you to resolve the native filesystem path for Android content 
URIs and is based on code in the [aFileChooser](https://github.com/iPaulPro/aFileChooser/blob/master/aFileChooser/src/com/ipaulpro/afilechooser/utils/FileUtils.java) library.

Original inspiration [from StackOverflow](http://stackoverflow.com/questions/20067508/get-real-path-from-uri-android-kitkat-new-storage-access-framework).

## Installation

```bash
$ cordova plugin add cordova-plugin-filepath
```

## Supported Platforms

* Android

## Usage

Once installed the plugin defines the `window.FilePath` object. To resolve a 
file path:

```js
window.FilePath.resolveNativePath('content://...', successCallback, errorCallback);
```


## LICENSE

Apache (see LICENSE.md)


