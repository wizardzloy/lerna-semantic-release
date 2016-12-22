var Repository = require('lerna/lib/Repository');
var PackageUtilities = require('lerna/lib/PackageUtilities');

module.exports = {
  getAllPackages: function () {
    var repository = new Repository();
    return PackageUtilities.getPackages(repository);
  }
};
