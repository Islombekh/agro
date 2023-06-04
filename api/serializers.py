from rest_framework.serializers import ModelSerializer
from agroapp.models import Post

class PostSerializers(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'rasmi', 'nomi', 'turi', 'qisqacha', 'toliq']