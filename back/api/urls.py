from django.urls import path
from .views import *


urlpatterns = [
    path('goods/', GoodListCreateAPIView.as_view()),
]