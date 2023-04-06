# swagger_client.CommentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_comment**](CommentApi.md#delete_comment) | **DELETE** /images/{id}/comments/{comment_id} | Deletes a comment
[**images_id_comments_post**](CommentApi.md#images_id_comments_post) | **POST** /images/{id}/comments | Add a comment to an image


# **delete_comment**
> delete_comment(id, comment_id, api_key=api_key)

Deletes a comment

delete a comment

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: ApiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.CommentApi(swagger_client.ApiClient(configuration))
id = 789 # int | image id under which to delete
comment_id = 789 # int | comment id to delete
api_key = 'api_key_example' # str |  (optional)

try:
    # Deletes a comment
    api_instance.delete_comment(id, comment_id, api_key=api_key)
except ApiException as e:
    print("Exception when calling CommentApi->delete_comment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| image id under which to delete | 
 **comment_id** | **int**| comment id to delete | 
 **api_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_id_comments_post**
> Image images_id_comments_post(id, body=body)

Add a comment to an image

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: ApiKeyAuth
configuration = swagger_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.CommentApi(swagger_client.ApiClient(configuration))
id = 789 # int | ID of the image to comment on
body = swagger_client.Comment() # Comment | Comment object (optional)

try:
    # Add a comment to an image
    api_response = api_instance.images_id_comments_post(id, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CommentApi->images_id_comments_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image to comment on | 
 **body** | [**Comment**](Comment.md)| Comment object | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

