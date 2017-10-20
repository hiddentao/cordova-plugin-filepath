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

    checkPermissions: function(successCallback, errorCallback) {
      exec(successCallback, errorCallback, "FilePath", "checkPermissions", []);
  }
};
