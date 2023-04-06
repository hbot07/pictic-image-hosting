/*
 * pictic API
 * The website is pictic, a web-based platform that offers image hosting and sharing services. Users can upload their own images and view a feed of user-generated image posts. The platform is designed to integrate Machine Learning (ML) algorithms for automatic image labeling, improving the searchability and discoverability of content on the platform. Users can interact with posts by upvoting, and commenting on them. The website features a simple and easy-to-use interface with tools such as tagging, liking, and commenting to help users organize and share their content. The website also offers features such as profile customization, search functionality, and a Chart-topping page displaying posts in order of upvotes.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PicticApi);
  }
}(this, function(expect, PicticApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Image', function() {
      beforeEach(function() {
        instance = new PicticApi.Image();
      });

      it('should create an instance of Image', function() {
        // TODO: update the code to test Image
        expect(instance).to.be.a(PicticApi.Image);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property upvotes (base name: "upvotes")', function() {
        // TODO: update the code to test the property upvotes
        expect(instance).to.have.property('upvotes');
        // expect(instance.upvotes).to.be(expectedValueLiteral);
      });

      it('should have the property comments (base name: "comments")', function() {
        // TODO: update the code to test the property comments
        expect(instance).to.have.property('comments');
        // expect(instance.comments).to.be(expectedValueLiteral);
      });

    });
  });

}));