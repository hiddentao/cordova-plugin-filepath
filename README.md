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

Once installed the plugin defines the `window.FilePath` object. Here is the full
example of Plugin in practice:
```js
window.FilePath.checkPermissions(function () {
  // got permissions
  window.FilePath.resolveNativePath('content://...', function (nativePath) {
    alert('Here is the native path' + nativePath);
  },
  function () {
    alert('Something went wrong getting the native path.');
  });
}, function () {
  // no permissions
  alert('No permissions.');
});
```

## Functions

## `resolveNativePath`

To resolve a file path:

```js
window.FilePath.resolveNativePath('content://...', successCallback, errorCallback);
```

##### successCallback
Returns the ``file://`` file path.

##### errorCallback
Returns the following object:
```js
{ code: <integer>, message: <string> }
```
Possible error codes are:
* ``-1`` - describes an invalid action
* ``0`` - ``file://`` path could not be resolved
* ``1`` - the native path links to a cloud file (e.g: from Google Drive app)

## `checkPermissions`

Asks the system for permissions.
```js
window.FilePath.checkPermissions(successCallback, errorCallback);
```

## LICENSE

Apache (see LICENSE.md)


