import connexion
import six

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server import util


def delete_image(id, api_key=None):  # noqa: E501
    """Deletes an image

    delete an image # noqa: E501

    :param id: image id to delete
    :type id: int
    :param api_key: 
    :type api_key: str

    :rtype: None
    """
    return 'do some magic!'


def find_images_by_tags(tags=None):  # noqa: E501
    """Finds images by tags

    Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. # noqa: E501

    :param tags: Tags to filter by
    :type tags: str

    :rtype: Image
    """
    return 'do some magic!'


def find_images_byitle(title=None):  # noqa: E501
    """Finds images by title

     # noqa: E501

    :param title: title to search by
    :type title: str

    :rtype: Image
    """
    return 'do some magic!'


def images_id_get(id):  # noqa: E501
    """Get a specific image by ID

     # noqa: E501

    :param id: ID of the image to retrieve
    :type id: int

    :rtype: Image
    """
    return 'do some magic!'


def images_id_share_post(id):  # noqa: E501
    """Get a shareable link to an image

     # noqa: E501

    :param id: ID of the image to share
    :type id: int

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def images_id_upvote_post(id):  # noqa: E501
    """Upvote an image

     # noqa: E501

    :param id: ID of the image to upvote
    :type id: int

    :rtype: Image
    """
    return 'do some magic!'


def images_post(title, image, description=None):  # noqa: E501
    """Upload a new image

     # noqa: E501

    :param title: Title of the image
    :type title: str
    :param image: Image file to upload
    :type image: werkzeug.datastructures.FileStorage
    :param description: Description of the image
    :type description: str

    :rtype: Image
    """
    return 'do some magic!'
