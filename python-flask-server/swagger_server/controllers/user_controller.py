import connexion
import six

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_create import UserCreate  # noqa: E501
from swagger_server.models.user_login import UserLogin  # noqa: E501
from swagger_server.models.user_token import UserToken  # noqa: E501
from swagger_server import util


def users_id_delete(id):  # noqa: E501
    """Delete a user account

     # noqa: E501

    :param id: ID of the user to delete
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def users_login_post(body=None):  # noqa: E501
    """Log in to an existing user account

     # noqa: E501

    :param body: User login object
    :type body: dict | bytes

    :rtype: UserToken
    """
    if connexion.request.is_json:
        body = UserLogin.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def users_logout_post():  # noqa: E501
    """Log out of the current user session

     # noqa: E501


    :rtype: None
    """
    return 'do some magic!'


def users_post(body=None):  # noqa: E501
    """Create a new user

     # noqa: E501

    :param body: User object
    :type body: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        body = UserCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
