Group members: <br>
Pavel Shegay 22B030469 <br>
Ayan Osserbek 22B030494 <br>
Baigabyl Elzhan 22B030522 <br>

/////////////////////////////////////////////////////////////// <br>


Web project using Angular for front-end and Django for back-end. <br>
Topic: tech store's website. <br>

/////////////////////////////////////////////////////////////// <br>

ЧТО СДЕЛАНО: <br>
BACK_END: <br>
- Models and serializers of products, categories
- Views for products, categories
- Urls for products, categories <br>

FRONT_END: <br>
- Home page
- Top bar (navigation bar)
- Urls for home
- Services and interfaces for products, categories

/////////////////////////////////////////////////////////////// <br>

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
back_end url examples: http://127.0.0.1:8000/categories/ http://127.0.0.1:8000/categories/2/products/ and so on... <br> 
    

