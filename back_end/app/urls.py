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
    #miscellaneous
    path('products/top_rated/', views.top_rated_products.as_view()),
    path('products/search/<str:query>/', views.search_products)
]