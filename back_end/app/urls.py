from django.urls import path
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    path('categories/', views.category_list, name='category-list'),
    path('categories/<int:id>/', views.category_detail, name='category-detail'),
    path('products/', views.product_list, name='product-list'),
    path('products/<int:id>/', views.product_detail, name='product-detail'),
]