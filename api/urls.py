from django.urls import path
from .views import PostViewSet

from rest_framework.routers import SimpleRouter
app_name = 'api'
urlpatterns = [
    # path('', PostListAPIView.as_view(), name='list'),
    # path('<int:pk>/', PostDetailAPIView.as_view(), name='detail')
]

router = SimpleRouter()
router.register('', PostViewSet, basename='post')
urlpatterns += router.urls

