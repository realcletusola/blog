from rest_framework import serializers 
from .models import BlogPost

#Blogpost serializer --> setting lookup-field to 'slug'
class BlogPostSerializer(serializers.ModelSerializer):
    created_by = serializers.CharField()
    class Meta:
        model = BlogPost 
        fields = ['title','slug', 'preface','category','image','content','status','featured','created','created_by',]