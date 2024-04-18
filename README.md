Group members: <br>
Pavel Shegay 22B030469 <br>
Ayan Osserbek 22B030494 <br>
Baigabyl Elzhan 22B030522 <br>

Web project using Angular for front-end and Django for back-end. <br>
Topic: tech store's website. <br>
//////////////////////////////////// <br>
To do: <br>
прописать бэк енд 
views: get all categories, get products of particular category, get category details

front end
services for views
<br>
//////////////////////////////////// <br>
HELPFUL BACK_END INFO: <br>
views.py: <br>
    categories() - FBV, get all categories, post or delete a category <br>
    category_details() - FBV, get or update details of a category <br>
    products() - CBV, get all products, post or delete a product <br>
    product_details() - CBV, get or update details of a product <br>
    products_of_category() - FBV, get all products of a category <br>
urls.py: <br>
    path('categories/', views.categories) - return all categories <br>
    path('categories/<int:id>/', views.category_details) - return details of a category <br>
    path('products/', views.products.as_view()) - return all products <br>
    path('products/<int:id>/', views.product_details.as_view()) - return details of a product <br>
    path('categories/<int:id>/products/', views.products_of_category) - return all products of a category <br>
    

