# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.test import BaseTestCase


class TestImageController(BaseTestCase):
    """ImageController integration test stubs"""

    def test_delete_image(self):
        """Test case for delete_image

        Deletes an image
        """
        headers = [('api_key', 'api_key_example')]
        response = self.client.open(
            '/images/{id}'.format(id=789),
            method='DELETE',
            headers=headers,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_find_images_by_tags(self):
        """Test case for find_images_by_tags

        Finds images by tags
        """
        query_string = [('tags', 'tags_example')]
        response = self.client.open(
            '/images/findByTags',
            method='GET',
            content_type='multipart/form-data',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_find_images_byitle(self):
        """Test case for find_images_byitle

        Finds images by title
        """
        query_string = [('title', 'title_example')]
        response = self.client.open(
            '/images/findByTitle',
            method='GET',
            content_type='multipart/form-data',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_images_id_get(self):
        """Test case for images_id_get

        Get a specific image by ID
        """
        response = self.client.open(
            '/images/{id}'.format(id=789),
            method='GET',
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_images_id_share_post(self):
        """Test case for images_id_share_post

        Get a shareable link to an image
        """
        response = self.client.open(
            '/images/{id}/share'.format(id=789),
            method='POST',
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_images_id_upvote_post(self):
        """Test case for images_id_upvote_post

        Upvote an image
        """
        response = self.client.open(
            '/images/{id}/upvote'.format(id=789),
            method='POST',
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_images_post(self):
        """Test case for images_post

        Upload a new image
        """
        data = dict(title='title_example',
                    image=(BytesIO(b'some file data'), 'file.txt'),
                    created_by_user_id=56)
        response = self.client.open(
            '/images',
            method='POST',
            data=data,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
