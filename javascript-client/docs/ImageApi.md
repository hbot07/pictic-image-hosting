# PicticApi.ImageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteImage**](ImageApi.md#deleteImage) | **DELETE** /images/{id} | Deletes an image
[**findImagesByTags**](ImageApi.md#findImagesByTags) | **GET** /images/findByTags | Finds images by tags
[**findImagesByitle**](ImageApi.md#findImagesByitle) | **GET** /images/findByTitle | Finds images by title
[**imagesIdGet**](ImageApi.md#imagesIdGet) | **GET** /images/{id} | Get a specific image by ID
[**imagesIdSharePost**](ImageApi.md#imagesIdSharePost) | **POST** /images/{id}/share | Get a shareable link to an image
[**imagesIdUpvotePost**](ImageApi.md#imagesIdUpvotePost) | **POST** /images/{id}/upvote | Upvote an image
[**imagesPost**](ImageApi.md#imagesPost) | **POST** /images | Upload a new image


<a name="deleteImage"></a>
# **deleteImage**
> deleteImage(id, opts)

Deletes an image

delete an image

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.ImageApi();

var id = 789; // Number | image id to delete

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
apiInstance.deleteImage(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| image id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="findImagesByTags"></a>
# **findImagesByTags**
> Image findImagesByTags(opts)

Finds images by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```javascript
var PicticApi = require('pictic_api');

var apiInstance = new PicticApi.ImageApi();

var opts = { 
  'tags': "tags_example" // String | Tags to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findImagesByTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **String**| Tags to filter by | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="findImagesByitle"></a>
# **findImagesByitle**
> Image findImagesByitle(opts)

Finds images by title



### Example
```javascript
var PicticApi = require('pictic_api');

var apiInstance = new PicticApi.ImageApi();

var opts = { 
  'title': "title_example" // String | title to search by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findImagesByitle(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| title to search by | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imagesIdGet"></a>
# **imagesIdGet**
> Image imagesIdGet(id)

Get a specific image by ID

### Example
```javascript
var PicticApi = require('pictic_api');

var apiInstance = new PicticApi.ImageApi();

var id = 789; // Number | ID of the image to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the image to retrieve | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imagesIdSharePost"></a>
# **imagesIdSharePost**
> InlineResponse200 imagesIdSharePost(id)

Get a shareable link to an image

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.ImageApi();

var id = 789; // Number | ID of the image to share


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagesIdSharePost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the image to share | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imagesIdUpvotePost"></a>
# **imagesIdUpvotePost**
> Image imagesIdUpvotePost(id)

Upvote an image

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.ImageApi();

var id = 789; // Number | ID of the image to upvote


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagesIdUpvotePost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the image to upvote | 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imagesPost"></a>
# **imagesPost**
> Image imagesPost(title, image, opts)

Upload a new image

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.ImageApi();

var title = "title_example"; // String | Title of the image

var image = "/path/to/file.txt"; // File | Image file to upload

var opts = { 
  'createdByUserId': 56 // Number | user id, who is uploading
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagesPost(title, image, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Title of the image | 
 **image** | **File**| Image file to upload | 
 **createdByUserId** | **Number**| user id, who is uploading | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

