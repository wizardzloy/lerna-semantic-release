var semverSeparator = '-semver-tag-for-';

module.exports = {
  lerna: function lerna (name, version) {
    return [name, '@', version].join('');
  },

  semver: function semver (name, version) {
    return [version, semverSeparator, name].join('');
  },

  getTagParts: function getTagParts (tag) {
    // we use lastIndex to skip leading "@" for namespaced packages
    const indexOfNameVersionSeparator = tag.lastIndexOf('@');

    if (indexOfNameVersionSeparator > -1) {
      return {
        name: tag.substring(0, indexOfNameVersionSeparator),
        version: tag.substring(indexOfNameVersionSeparator + 1)
      }
    }

    if (tag.indexOf(semverSeparator) > -1) {
      return {
        name: tag.split(semverSeparator)[1],
        version: tag.split(semverSeparator)[0]
      }
    }
  }
};
