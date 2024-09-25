from rest_framework import generics
from .models import *
from .serializers import *


class GoodListCreateAPIView(generics.ListCreateAPIView):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
