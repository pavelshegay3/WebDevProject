from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.CharField(max_length=100)
    count = models.IntegerField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    rating = models.FloatField(default=0.0)

    class Meta:
        verbose_name_plural = "products"

    def __str__(self):
        return self.name