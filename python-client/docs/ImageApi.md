# swagger_client.ImageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_image**](ImageApi.md#delete_image) | **DELETE** /images/{id} | Deletes an image
[**find_images_by_tags**](ImageApi.md#find_images_by_tags) | **GET** /images/findByTags | Finds images by tags
[**find_images_byitle**](ImageApi.md#find_images_byitle) | **GET** /images/findByTitle | Finds images by title
[**images_id_get**](ImageApi.md#images_id_get) | **GET** /images/{id} | Get a specific image by ID
[**images_id_share_post**](ImageApi.md#images_id_share_post) | **POST** /images/{id}/share | Get a shareable link to an image
[**images_id_upvote_post**](ImageApi.md#images_id_upvote_post) | **POST** /images/{id}/upvote | Upvote an image
[**images_post**](ImageApi.md#images_post) | **POST** /images | Upload a new image


# **delete_image**
> delete_image(id, api_key=api_key)

Deletes an image

delete an image

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
api_instance = swagger_client.ImageApi(swagger_client.ApiClient(configuration))
id = 789 # int | image id to delete
api_key = 'api_key_example' # str |  (optional)

try:
    # Deletes an image
    api_instance.delete_image(id, api_key=api_key)
except ApiException as e:
    print("Exception when calling ImageApi->delete_image: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| image id to delete | 
 **api_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_images_by_tags**
> Image find_images_by_tags(tags=tags)

Finds images by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ImageApi()
tags = 'tags_example' # str | Tags to filter by (optional)

try:
    # Finds images by tags
    api_response = api_instance.find_images_by_tags(tags=tags)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->find_images_by_tags: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **str**| Tags to filter by | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_images_byitle**
> Image find_images_byitle(title=title)

Finds images by title



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ImageApi()
title = 'title_example' # str | title to search by (optional)

try:
    # Finds images by title
    api_response = api_instance.find_images_byitle(title=title)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->find_images_byitle: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| title to search by | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_id_get**
> Image images_id_get(id)

Get a specific image by ID

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ImageApi()
id = 789 # int | ID of the image to retrieve

try:
    # Get a specific image by ID
    api_response = api_instance.images_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->images_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image to retrieve | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_id_share_post**
> InlineResponse200 images_id_share_post(id)

Get a shareable link to an image

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
api_instance = swagger_client.ImageApi(swagger_client.ApiClient(configuration))
id = 789 # int | ID of the image to share

try:
    # Get a shareable link to an image
    api_response = api_instance.images_id_share_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->images_id_share_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image to share | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_id_upvote_post**
> Image images_id_upvote_post(id)

Upvote an image

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
api_instance = swagger_client.ImageApi(swagger_client.ApiClient(configuration))
id = 789 # int | ID of the image to upvote

try:
    # Upvote an image
    api_response = api_instance.images_id_upvote_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->images_id_upvote_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image to upvote | 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images_post**
> Image images_post(title, image, description=description)

Upload a new image

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
api_instance = swagger_client.ImageApi(swagger_client.ApiClient(configuration))
title = 'title_example' # str | Title of the image
image = '/path/to/file.txt' # file | Image file to upload
description = 'description_example' # str | Description of the image (optional)

try:
    # Upload a new image
    api_response = api_instance.images_post(title, image, description=description)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageApi->images_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| Title of the image | 
 **image** | **file**| Image file to upload | 
 **description** | **str**| Description of the image | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

