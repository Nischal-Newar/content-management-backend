This application is developed using Node JS.

This application provides the below REST API's 1. Signup: To signup a new user 2. Login: To login an authorized user 3. Post: To add some posts inside the MongoDB 4. Logout: To logout an authorized user

#Schema Defined I have defined two different schema inside the application. One schema will handle the details of the user. The second schema handles the posts added by a user.

#Users The schema for the users is defined to store the name, email id, password(hashed) and tokens(generated using JWT).

#Posts The schema for the posts is defined to store the below content: 1. Email Id: uniquely identifies the user 2. Post: it is used to store different post and have the below content: 2.1 Title: it will provide the title of the post. 2.2 Description: it will store the post of the user. 2.3 Name: it will store the user name. 2.4 Time: it will store the auto-genearted time.

Prerequisite:

Install Node js in your local machine. You can follow the guidelines from here "https://nodejs.org/en/download/".
Install Mongo DB database. You can follow the guidelines frome here "https://docs.mongodb.com/manual/installation/"
Setup .env file on your local machine.
Steps:

Inside you .env file please add the below attributes: NODE_ENV=development PORT={You application running port} DATABASE_URL={database url} DATABSE_NAME=c{database name}
Clone this repository in your local machine.
Go to the database-management directory.
Run the "npm install" command to download all the required repositories.
Run the below commands as per your need: npm run dev (it will start the application using nodemon and will refresh when you will update and save .js files) npm start (to run the application)