var exec = require('cordova/exec');


module.exports = {
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @param successCallback  invoked with a native filesystem path string
     * @param errorCallback  invoked if error occurs
     */
    resolveNativePath: function(path, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "FilePath", "resolveNativePath", [path]);
    },
    /**
     * Retrieves the data from the `InputStream` supplied by the `ContentProvider` of the passed URI.
     * @param {string} uri content URI
     * @returns {Promise<ArrayBuffer|Object>} ArrayBuffer containing the `InputStream` data if successful, error object otherwise
     */
    getArrayBufferFromContentUri: function(uri) {
        let resolve, reject, promise = new Promise((res, rej) => {resolve = res; reject = rej;});
        exec(resolve, reject, "FilePath", "getArrayBufferFromContentUri", [uri]);
        return promise;
    }
};
