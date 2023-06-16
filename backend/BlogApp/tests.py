from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

from django.urls import reverse
from django.contrib.auth.models import User

from .models import BlogPost

  

get_blog_url = reverse('index')
get_featured_blog_url = reverse('featured')

def details_url(slug):
    return reverse('details', args=[slug])

""" Testcase for blog app """
class BlogApiTest(TestCase):

    # setting up the client
    def setUp(self):
        self.client = APIClient()

    # get all published blogs
    def test_get_blogs(self):
        response = self.client.get(get_blog_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

 # get all featured blogs
    def test_featured_blogs(self):
        response = self.client.get(get_featured_blog_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

# get blog details by slug
    def test_blog_details(self):

        user = User.objects.create_user(
            username="test",
            password="MYtestus3r@"
        )
        blog = BlogPost.objects.create(
            title="test",
            slug="test-tech",
            category="Tech",
            content="A new test",
            status="Publish",
            created_by = user,
            featured=True
        )

        response = self.client.get(details_url(blog.slug))

        self.assertEqual(response.status_code, status.HTTP_200_OK)