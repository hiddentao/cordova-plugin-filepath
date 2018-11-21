# cordova-plugin-filepath

This plugin allows you to resolve the native filesystem path for Android content 
URIs and is based on code in the [aFileChooser](https://github.com/iPaulPro/aFileChooser/blob/master/aFileChooser/src/com/ipaulpro/afilechooser/utils/FileUtils.java) library.
Alternatively, this plugin allows to get the contents of an ``InputStream`` associated to a Content URI. This is especially helpful, if a native path is not available.

Original inspiration [from StackOverflow](http://stackoverflow.com/questions/20067508/get-real-path-from-uri-android-kitkat-new-storage-access-framework).

## Installation

```bash
$ cordova plugin add cordova-plugin-filepath
```

## Supported Platforms

* Android

## Usage

Once installed the plugin defines the `window.FilePath` object. It offers the following functions:

### resolveNativePath
> Allows to resolve a native file path from a content URI.
>
> Example:
>```js
>window.FilePath.resolveNativePath("content://com.example.app/cache/1.pdf", successCallback, errorCallback);
>```
>##### successCallback
>Returns the ``file://`` file path.
>
>##### errorCallback
>Returns the following object:
>```js
>{ code: <integer>, message: <string> }
>```
>Possible error codes are:
>* ``-1`` - describes an invalid action
>* ``0`` - path could not be resolved
>* ``1`` - the native path links to a cloud file (e.g: from Google Drive app)

### getArrayBufferFromContentUri
> Retrieves the data from the `InputStream` supplied by the `ContentProvider` of the passed URI.
> The result is supplied inside a `Promise`, which is resolved with the `ArrayBuffer` or rejected with an error object.
>
> Example:
>```js
>(async () => {
>   try {
>        let resultBuffer = await window.FilePath.getArrayBufferFromContentUri("content://com.example.app/cache/1.pdf");
>        // Use the resulting buffer        
>   } catch (error){
>        // Example error: {code: 0, message: "No content provider: null"}
>        console.warn(error);
>   }
>})();
>```

## LICENSE

Apache (see LICENSE.md)


