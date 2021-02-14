# About The Project 
This application will act as a backend server that will provide REST API's to integrate with the frontend application. 😄

This application provides the below REST API's
* Signup: To signup a new user 
* Login: To login an authorized user 
* Post: To add some posts inside the MongoDB 
* Logout: To logout an authorized user

## Schema Defined 

I have defined two different schema inside the application. 
* One schema will handle the details of the user. 
* The second schema handles the posts added by a user.

### Users Schema
The schema for the users is defined to store the name, email id, password(hashed) and tokens(generated using JWT).

## Posts Schema 
The schema for the posts is defined to store the below content: 
    * Email Id: uniquely identifies the user 
    * Post: it is used to store different post and have the below content: 
        * Title: it will provide the title of the post. 
        * Description: it will store the post of the user. 
        * Name: it will store the user name. 
        * Time: it will store the auto-genearted time.

## Prerequisite:

* Install Node js in your local machine. You can follow the guidelines from here "https://nodejs.org/en/download/".
* Install Mongo DB database. You can follow the guidelines frome here "https://docs.mongodb.com/manual/installation/"
* Setup .env file on your local machine.


## Steps:

* Inside you .env file please add the below attributes: 
    * NODE_ENV=development 
    * PORT={You application running port} 
    * DATABASE_URL={database url} 
    * DATABSE_NAME={database name}
    * HOST={frontent-host name} for e.g. http://localhost:3000/

* Clone this repository in your local machine.

* Go to the content-management-backend directory.

* Run the "npm install" command to download all the required repositories.

* Run the below commands as per your need: 
    * npm run dev (it will start the application using nodemon and will refresh when you will update and save .js files) 
    * npm start (to run the application)