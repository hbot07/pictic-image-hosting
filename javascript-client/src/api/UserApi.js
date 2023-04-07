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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/User', 'model/UserLogin', 'model/UserToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/User'), require('../model/UserLogin'), require('../model/UserToken'));
  } else {
    // Browser globals (root is window)
    if (!root.PicticApi) {
      root.PicticApi = {};
    }
    root.PicticApi.UserApi = factory(root.PicticApi.ApiClient, root.PicticApi.Error, root.PicticApi.User, root.PicticApi.UserLogin, root.PicticApi.UserToken);
  }
}(this, function(ApiClient, Error, User, UserLogin, UserToken) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usersIdDelete operation.
     * @callback module:api/UserApi~usersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user account
     * @param {Number} id ID of the user to delete
     * @param {module:api/UserApi~usersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.usersIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling usersIdDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersLoginPost operation.
     * @callback module:api/UserApi~usersLoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log in to an existing user account
     * @param {Object} opts Optional parameters
     * @param {module:model/UserLogin} opts.body User login object
     * @param {module:api/UserApi~usersLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserToken}
     */
    this.usersLoginPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = UserToken;

      return this.apiClient.callApi(
        '/users/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersLogoutPost operation.
     * @callback module:api/UserApi~usersLogoutPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out of the current user session
     * @param {module:api/UserApi~usersLogoutPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.usersLogoutPost = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/logout', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UserApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.body User object
     * @param {module:api/UserApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
