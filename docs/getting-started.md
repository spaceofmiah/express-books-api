# Getting Started

Follow the detailed step below to run the application.

## Setup

**Install Typescript**

To install typescript, follow their intensive guide provided on their website here --> https://www.typescriptlang.org/download


**Install Application Dependencies**

Open your terminal/command prompt and navigate to the application root directory. Run 

```
npm install
```

That should install all dependencies needed by the application to run.


**Mongo Atlas Setup [Free Cluster]**

Visit [Mongo Atlas](https://www.mongodb.com/atlas/database), sign up if you don't have an account. If you do have an account, sign in instead. On successful authentication, you would have access to creating a database from which you would also gain access to your connection string.

A much more detailed guide to setting up a free mongo atlas database and gaining access to your connection string can be found on mongo's guide

[free atlas database setup & connection string access] https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/

Your connection string should look like 

`mongodb+srv://{{user_name}}:{{password}}@{{host_name}}.n0pchcm.mongodb.net/{{db_name}}?retryWrites=true&w=majority`

The important details are `user_name`, `password`, `host_name` & `db_name`. Ensure those placeholders are accurately updated with the actual values the database is setup with.

**Create an Environment File**

Create a `.env` file in your root directory and add this two necessary environment

```
MONGO_DB_URL=your_mongo_atlas_db_connection_string
SERVER_PORT=3000
```

## Running Application

Ensure every Setup step has been followed accurately and run the following command from the root directory in your command prompt/terminal

```
npm run dev
```

The above command would build the project using typescript compiler and start the application. The compiled files are stored in `dist` folder on the root directory. 

## Interacting With Application

To interact with the running application api, you'll need postman which you can download from [postman official download site](https://www.postman.com/downloads/)


See [Making Request Next](./making-request.md): to learn how to interact with the API