from rest_framework import serializers
from .models import *

class GoodSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Good
