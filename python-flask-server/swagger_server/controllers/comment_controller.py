import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server import util


def delete_comment(id, comment_id, api_key=None):  # noqa: E501
    """Deletes a comment

    delete a comment # noqa: E501

    :param id: image id under which to delete
    :type id: int
    :param comment_id: comment id to delete
    :type comment_id: int
    :param api_key: 
    :type api_key: str

    :rtype: None
    """
    return 'do some magic!'


def images_id_comments_post(id, body=None):  # noqa: E501
    """Add a comment to an image

     # noqa: E501

    :param id: ID of the image to comment on
    :type id: int
    :param body: Comment object
    :type body: dict | bytes

    :rtype: Image
    """
    if connexion.request.is_json:
        body = Comment.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
