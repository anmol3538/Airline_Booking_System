#Welcome to the Flight Service

## Project Setup

clone the project on your local.
 -execute `npm install` on the same path as of the same directory of this downloaded project.
 -create a `.env` file in the root directory and add the following environment variable.
   - PORT = `3000`
- Inside the `src/config`folder create a new file `config.json` and then add the following piece of info

`
  {
  "development": {
    "username": "<your_database_name>",
    "password": "<your_mysql_password>",
    "database": "Flights_search_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
  }

`

once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
