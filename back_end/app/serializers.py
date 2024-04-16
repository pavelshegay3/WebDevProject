from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.Serializer):
    class Meta:
        model = Category
        fields = ('id',
                  'name')
class ProductSerializer(serializers.Serializer):
    class Meta:
        model = Product
        fields = ('id',
                  'name',
                  'price',
                  'description',
                  'count',
                  'category')