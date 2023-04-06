# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCommentController(BaseTestCase):
    """CommentController integration test stubs"""

    def test_delete_comment(self):
        """Test case for delete_comment

        Deletes a comment
        """
        headers = [('api_key', 'api_key_example')]
        response = self.client.open(
            '/images/{id}/comments/{comment_id}'.format(id=789, comment_id=789),
            method='DELETE',
            headers=headers,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_images_id_comments_post(self):
        """Test case for images_id_comments_post

        Add a comment to an image
        """
        body = Comment()
        response = self.client.open(
            '/images/{id}/comments'.format(id=789),
            method='POST',
            data=json.dumps(body),
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
