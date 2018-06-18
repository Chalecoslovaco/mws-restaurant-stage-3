mws-restaurant-stage-3 - Project Overview

For the Restaurant Reviews projects, you will incrementally convert a static webpage to a mobile-ready web application. In Stage Three, you will take the connected application you yu built in Stage One and Stage Two and add additional functionality. You will add a form to allow users to create their own reviews. If the app is offline, your form will defer updating to the remote database until a connection is established. Finally,you’ll work to optimize your site to meet even stricter performance benchmarks than the previous project, and test again using Lighthouse.

Local Development API Server
Usage
Get Restaurants
curl "http://localhost:1337/restaurants"
Get Restaurants by id
curl "http://localhost:1337/restaurants/{3}"
Architecture
Local server

Node.js
Sails.js
Contributors
Brandy Lee Camacho - Technical Project Manager
David Harris - Web Services Lead
Omar Albeik - Frontend engineer
Getting Started
Development local API Server
Location of server = /server Server depends on node.js LTS Version: v6.11.2 , npm, and sails.js Please make sure you have these installed before proceeding forward.

Great, you are ready to proceed forward; awesome!

Let's start with running commands in your terminal, known as command line interface (CLI)

Install project dependancies
# npm i
Install Sails.js globally
# npm i sails -g
Start the server
# node server
You should now have access to your API server environment
debug: Environment : development debug: Port : 1337

Endpoints
GET Endpoints
Get all restaurants
http://localhost:1337/restaurants/
Get favorite restaurants
http://localhost:1337/restaurants/?is_favorite=true
Get a restaurant by id
http://localhost:1337/restaurants/<restaurant_id>
Get all reviews for a restaurant
http://localhost:1337/reviews/?restaurant_id=<restaurant_id>
Get all restaurant reviews
http://localhost:1337/reviews/
Get a restaurant review by id
http://localhost:1337/reviews/<review_id>
Get all reviews for a restaurant
http://localhost:1337/reviews/?restaurant_id=<restaurant_id>
POST Endpoints
Create a new restaurant review
http://localhost:1337/reviews/
Parameters
{
    "restaurant_id": <restaurant_id>,
    "name": <reviewer_name>,
    "rating": <rating>,
    "comments": <comment_text>
}
PUT Endpoints
Favorite a restaurant
http://localhost:1337/restaurants/<restaurant_id>/?is_favorite=true
Unfavorite a restaurant
http://localhost:1337/restaurants/<restaurant_id>/?is_favorite=false
Update a restaurant review
http://localhost:1337/reviews/<review_id>
Parameters
{
    "name": <reviewer_name>,
    "rating": <rating>,
    "comments": <comment_text>
}
DELETE Endpoints
Delete a restaurant review
http://localhost:1337/reviews/<review_id>
If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our Waffle Dashboard. Even better you can submit a Pull Request with a fix :)