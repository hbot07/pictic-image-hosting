# coding: utf-8

import sys
from setuptools import setup, find_packages

NAME = "swagger_server"
VERSION = "1.0.0"

# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "connexion",
    "swagger-ui-bundle>=0.0.2"
]

setup(
    name=NAME,
    version=VERSION,
    description="pictic API",
    author_email="",
    url="",
    keywords=["Swagger", "pictic API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    package_data={'': ['swagger/swagger.yaml']},
    include_package_data=True,
    entry_points={
        'console_scripts': ['swagger_server=swagger_server.__main__:main']},
    long_description="""\
    The website is pictic, a web-based platform that offers image hosting and sharing services. Users can upload their own images and view a feed of user-generated image posts. The platform is designed to integrate Machine Learning (ML) algorithms for automatic image labeling, improving the searchability and discoverability of content on the platform. Users can interact with posts by upvoting, and commenting on them. The website features a simple and easy-to-use interface with tools such as tagging, liking, and commenting to help users organize and share their content. The website also offers features such as profile customization, search functionality, and a Chart-topping page displaying posts in order of upvotes.
    """
)

