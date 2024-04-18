from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    price = serializers.FloatField()
    description = serializers.CharField(max_length=100)
    count = serializers.IntegerField()
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
