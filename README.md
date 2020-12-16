# Simple Cake App

Simple cake app. Serverless REST API with React frontend

## Setup
```
yarn bootstrap # install app dependencies

cp example.env .env

cp apps/backend/src/db/config/example.config.json apps/backend/src/db/config/config.json # used by sequelize ORM
```

You'll first need to run db migrations
```
docker-compose up -d # run postgres docker container as daemon
cd apps/backend && yarn migrate # run migrations
```

Then in apps/backend folder run `yarn serve` to start the api server on http://localhost:3000/dev

For the React app navigate to apps/frontend and run `yarn start` to run app on http://localhost:1234


### TODO
Tests...