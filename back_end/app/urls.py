from django.urls import path
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    path('categories/', views.category_list, name='category-list'),
    path('categories/<int:id>/', views.category_details, name='category-details'),
    path('products/', views.product_list, name='product-list'),
    path('products/<int:id>/', views.product_details, name='product-details'),
]