# About The Project 
This application will act as a backend server that will provide REST API's to integrate with the frontend application. 😄

This application provides the below REST API's
1. Signup: To signup a new user 
2. Login: To login an authorized user 
3. Post: To add some posts inside the MongoDB 
4. Logout: To logout an authorized user

## Schema Defined 

I have defined two different schema inside the application. 
1. One schema will handle the details of the user. 
2. The second schema handles the posts added by a user.

### Users Schema
The schema for the users is defined to store the name, email id, password(hashed) and tokens(generated using JWT).

## Posts Schema 
The schema for the posts is defined to store the below content: 
    1. Email Id: uniquely identifies the user 
    2. Post: it is used to store different post and have the below content: 
        2.1 Title: it will provide the title of the post. 
        2.2 Description: it will store the post of the user. 
        2.3 Name: it will store the user name. 
        2.4 Time: it will store the auto-genearted time.

## Prerequisite:

1. Install Node js in your local machine. You can follow the guidelines from here "https://nodejs.org/en/download/".
2. Install Mongo DB database. You can follow the guidelines frome here "https://docs.mongodb.com/manual/installation/"
3. Setup .env file on your local machine.


## Steps:

1. Inside you .env file please add the below attributes: 
    1.1 NODE_ENV=development 
    1.2 PORT={You application running port} 
    1.3 DATABASE_URL={database url} 
    1.4 DATABSE_NAME={database name}

2. Clone this repository in your local machine.

3. Go to the content-management-backend directory.

4. Run the "npm install" command to download all the required repositories.

5. Run the below commands as per your need: 
    5.1 npm run dev (it will start the application using nodemon and will refresh when you will update and save .js files) 
    5.2 npm start (to run the application)