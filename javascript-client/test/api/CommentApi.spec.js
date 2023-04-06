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

  beforeEach(function() {
    instance = new PicticApi.CommentApi();
  });

  describe('(package)', function() {
    describe('CommentApi', function() {
      describe('deleteComment', function() {
        it('should call deleteComment successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteComment call
          /*
          var id = 789;
          var commentId = 789;
          var opts = {};
          opts.apiKey = "apiKey_example";

          instance.deleteComment(id, commentId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('imagesIdCommentsPost', function() {
        it('should call imagesIdCommentsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for imagesIdCommentsPost call and complete the assertions
          /*
          var id = 789;
          var opts = {};
          opts.body = new PicticApi.Comment();
          opts.body.id = "0";
          opts.body.username = "";
          opts.body.text = "";

          instance.imagesIdCommentsPost(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PicticApi.Image);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.tags).to.be.a('string');
            expect(data.tags).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.upvotes).to.be.a('number');
            expect(data.upvotes).to.be(0);
            {
              let dataCtr = data.comments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PicticApi.Comment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");
                expect(data.text).to.be.a('string');
                expect(data.text).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
