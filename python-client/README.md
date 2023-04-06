# swagger-client
The website is pictic, a web-based platform that offers image hosting and sharing services. Users can upload their own images and view a feed of user-generated image posts. The platform is designed to integrate Machine Learning (ML) algorithms for automatic image labeling, improving the searchability and discoverability of content on the platform. Users can interact with posts by upvoting, and commenting on them. The website features a simple and easy-to-use interface with tools such as tagging, liking, and commenting to help users organize and share their content. The website also offers features such as profile customization, search functionality, and a Chart-topping page displaying posts in order of upvotes.

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com//.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com//.git`)

Then import the package:
```python
import swagger_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import swagger_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

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

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CommentApi* | [**delete_comment**](docs/CommentApi.md#delete_comment) | **DELETE** /images/{id}/comments/{comment_id} | Deletes a comment
*CommentApi* | [**images_id_comments_post**](docs/CommentApi.md#images_id_comments_post) | **POST** /images/{id}/comments | Add a comment to an image
*ImageApi* | [**delete_image**](docs/ImageApi.md#delete_image) | **DELETE** /images/{id} | Deletes an image
*ImageApi* | [**find_images_by_tags**](docs/ImageApi.md#find_images_by_tags) | **GET** /images/findByTags | Finds images by tags
*ImageApi* | [**find_images_byitle**](docs/ImageApi.md#find_images_byitle) | **GET** /images/findByTitle | Finds images by title
*ImageApi* | [**images_id_get**](docs/ImageApi.md#images_id_get) | **GET** /images/{id} | Get a specific image by ID
*ImageApi* | [**images_id_share_post**](docs/ImageApi.md#images_id_share_post) | **POST** /images/{id}/share | Get a shareable link to an image
*ImageApi* | [**images_id_upvote_post**](docs/ImageApi.md#images_id_upvote_post) | **POST** /images/{id}/upvote | Upvote an image
*ImageApi* | [**images_post**](docs/ImageApi.md#images_post) | **POST** /images | Upload a new image
*UserApi* | [**users_id_delete**](docs/UserApi.md#users_id_delete) | **DELETE** /users/{id} | Delete a user account
*UserApi* | [**users_login_post**](docs/UserApi.md#users_login_post) | **POST** /users/login | Log in to an existing user account
*UserApi* | [**users_logout_post**](docs/UserApi.md#users_logout_post) | **POST** /users/logout | Log out of the current user session
*UserApi* | [**users_post**](docs/UserApi.md#users_post) | **POST** /users | Create a new user


## Documentation For Models

 - [Comment](docs/Comment.md)
 - [Error](docs/Error.md)
 - [Image](docs/Image.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [User](docs/User.md)
 - [UserCreate](docs/UserCreate.md)
 - [UserLogin](docs/UserLogin.md)
 - [UserToken](docs/UserToken.md)


## Documentation For Authorization


## ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author


