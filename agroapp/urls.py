from django.urls import path
from .views import home
# from .views import page
from . import  views

urlpatterns = [
    path('', home, name='home'),

    path('page/', views.page, name='page'),

    path('about/', views.about, name='about'),

]

# path('', page, name='page')