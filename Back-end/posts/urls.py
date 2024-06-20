from django.urls import path
from .views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('api/posts/', PostListCreateAPIView.as_view(), name='post_list_create'),
    path('api/posts/<int:pk>/', PostRetrieveUpdateDestroyAPIView.as_view(), name='post_detail'),
]
