from django.urls import path
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    # urls for categories
    path('categories/', views.categories),
    path('categories/<int:id>/', views.category_details),
    # urls for products
    path('products/', views.products.as_view()),
    path('products/<int:id>/', views.product_details.as_view()),
    path('categories/<int:id>/products/', views.products_of_category),
    
    path('products/top_rated/', views.TopRatedProducts.as_view()),
]