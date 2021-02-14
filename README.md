To run this application as the backend server. Please follow the steps mentioned below.

Prerequisite:

1. Install Node js in your local machine. You can follow the guidelines from here "https://nodejs.org/en/download/".
2. Install Mongo DB database. You can follow the guidelines frome here
3. Setup .env file on your local machine.

Steps:

1. Inside you .env file please add the below attributes:
    NODE_ENV=development
    PORT={You application running port}
    DATABASE_URL={database url}
    DATABSE_NAME=c{database name}
2. Clone this repository in your local machine.
3. Go to the database-management directory.
4. Run the below commands as per your need:
    npm run dev (it will start the application using nodemon and will refresh when you will update and save .js files)
    npm start (to run the application)
