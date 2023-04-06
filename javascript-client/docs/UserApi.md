# PicticApi.UserApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersIdDelete**](UserApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a user account
[**usersLoginPost**](UserApi.md#usersLoginPost) | **POST** /users/login | Log in to an existing user account
[**usersLogoutPost**](UserApi.md#usersLogoutPost) | **POST** /users/logout | Log out of the current user session
[**usersPost**](UserApi.md#usersPost) | **POST** /users | Create a new user


<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(id)

Delete a user account

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.UserApi();

var id = 789; // Number | ID of the user to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the user to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="usersLoginPost"></a>
# **usersLoginPost**
> UserToken usersLoginPost(opts)

Log in to an existing user account

### Example
```javascript
var PicticApi = require('pictic_api');

var apiInstance = new PicticApi.UserApi();

var opts = { 
  'body': new PicticApi.UserLogin() // UserLogin | User login object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserLogin**](UserLogin.md)| User login object | [optional] 

### Return type

[**UserToken**](UserToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="usersLogoutPost"></a>
# **usersLogoutPost**
> usersLogoutPost()

Log out of the current user session

### Example
```javascript
var PicticApi = require('pictic_api');
var defaultClient = PicticApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new PicticApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersLogoutPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(opts)

Create a new user

### Example
```javascript
var PicticApi = require('pictic_api');

var apiInstance = new PicticApi.UserApi();

var opts = { 
  'body': new PicticApi.UserCreate() // UserCreate | User object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCreate**](UserCreate.md)| User object | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

