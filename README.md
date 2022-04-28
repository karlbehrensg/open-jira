# Next.js OpenJira App

To run the app in local machine, it's needed to run a database.

```
docker-compose up -d
```

MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Env variables config

Rename file **.env.template** to **.env**

## Fill the DB with test data

Call the endpoint

```
http://localhost:3000/api/seed
```
