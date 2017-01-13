const expect = require('expect.js');
const utils = require('../index');

describe('tagging', function() {

  const tagging = utils.tagging;

  describe('getTagParts', function() {

    it('should work with regular package names', function () {
      expect(tagging.getTagParts('my-regular-package@1.0.0')).to.eql({
        name: 'my-regular-package',
        version: '1.0.0'
      });
    });

    it('should work with namespaced package names', function () {
      expect(tagging.getTagParts('@my-org/my-namespaced-package@9.9.9')).to.eql({
        name: '@my-org/my-namespaced-package',
        version: '9.9.9'
      });
    });

  });

});
