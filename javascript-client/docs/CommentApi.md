# PicticApi.CommentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteComment**](CommentApi.md#deleteComment) | **DELETE** /images/{id}/comments/{comment_id} | Deletes a comment
[**imagesIdCommentsPost**](CommentApi.md#imagesIdCommentsPost) | **POST** /images/{id}/comments | Add a comment to an image


<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(id, commentId, opts)

Deletes a comment

delete a comment

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.CommentApi();

var id = 789; // Number | image id under which to delete

var commentId = 789; // Number | comment id to delete

var opts = { 
  'apiKey': "apiKey_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteComment(id, commentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| image id under which to delete | 
 **commentId** | **Number**| comment id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imagesIdCommentsPost"></a>
# **imagesIdCommentsPost**
> Image imagesIdCommentsPost(id, opts)

Add a comment to an image

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.CommentApi();

var id = 789; // Number | ID of the image to comment on

var opts = { 
  'body': new PicticApi.Comment() // Comment | Comment object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagesIdCommentsPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the image to comment on | 
 **body** | [**Comment**](Comment.md)| Comment object | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

