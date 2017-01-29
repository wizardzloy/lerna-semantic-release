var execAsTask = require('lerna-semantic-release-utils').execAsTask;

module.exports = {
  publish: function version (path, scopedPublicPackage) {
    return execAsTask('npm publish ' + (scopedPublicPackage ? '--access=public ' :'') + path);
  },
  version: function version (v) {
    return execAsTask('npm version ' + v + ' --git-tag-version false');
  },
  getVersion: function getVersion (packageName) {
    return function (done) {
      execAsTask(`npm view ${packageName} version`, {silent: true})(function (err, stdout) {
        done(err, stdout.trim());
      });
    }
  }
};
