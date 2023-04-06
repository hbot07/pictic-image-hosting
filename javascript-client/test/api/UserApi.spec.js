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
    instance = new PicticApi.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('usersIdDelete', function() {
        it('should call usersIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for usersIdDelete call
          /*
          var id = 789;

          instance.usersIdDelete(id, function(error, data, response) {
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
      describe('usersLoginPost', function() {
        it('should call usersLoginPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersLoginPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new PicticApi.UserLogin();
          opts.body.email = "";
          opts.body.password = "";

          instance.usersLoginPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PicticApi.UserToken);
            expect(data.accessToken).to.be.a('string');
            expect(data.accessToken).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersLogoutPost', function() {
        it('should call usersLogoutPost successfully', function(done) {
          // TODO: uncomment usersLogoutPost call
          /*

          instance.usersLogoutPost(function(error, data, response) {
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
      describe('usersPost', function() {
        it('should call usersPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new PicticApi.UserCreate();
          opts.body.username = "";
          opts.body.email = "";
          opts.body.password = "";

          instance.usersPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PicticApi.User);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());

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
