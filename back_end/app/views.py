from django.http import JsonResponse, Http404
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from django.db.models import Q

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# TO DO: 1)delete unnecessary request arguments in CBVs
# Create your views here.

# 2 FUNCTION BASED VIEWS below for Category
@api_view(['GET', 'POST', 'DELETE']) # get all products/post or delete a category
def categories(request, id=None):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # success
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # failure
    elif request.method == 'DELETE':
        category = get_object_or_404(Category, id=id)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET', 'PUT']) # get/update details of a category
def category_details(request, id):
    category = get_object_or_404(Category, id=id)
    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

# 2 CLASS BASED VIEWS below for Product and 1 FUNCTION BASED VIEW for products of category
class products(APIView): # get all products/post or delete a product
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id):
        product = get_object_or_404(Product, id=id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class product_details(APIView): # get/update details of a product
    def get(self, request, id):
        product = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    def put(self, request, id):
        product = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def products_of_category(request, id):
    products = Product.objects.filter(category_id=id)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

class top_rated_products(APIView):
    def get(self, request):
        products = Product.objects.all().order_by('-rating')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
def search_products(request, query):
    products = Product.objects.filter(Q(name__icontains=query))
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
