# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_login import UserLogin  # noqa: E501
from swagger_server.models.user_token import UserToken  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_users_id_delete(self):
        """Test case for users_id_delete

        Delete a user account
        """
        response = self.client.open(
            '/users/{id}'.format(id=789),
            method='DELETE',
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_login_post(self):
        """Test case for users_login_post

        Log in to an existing user account
        """
        body = UserLogin()
        response = self.client.open(
            '/users/login',
            method='POST',
            data=json.dumps(body),
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_logout_post(self):
        """Test case for users_logout_post

        Log out of the current user session
        """
        response = self.client.open(
            '/users/logout',
            method='POST',
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_post(self):
        """Test case for users_post

        Create a new user
        """
        body = User()
        response = self.client.open(
            '/users',
            method='POST',
            data=json.dumps(body),
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
