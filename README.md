# Mongoose demo with docker
This is a demo of how to simply use mongoose and how to dockerize it and deploy it to a server via docker hub.
1. Mongoose demo
  - Using .env file to store environment variables
  - Using mongoose to connect to a mongodb database (atlas)
  - Using mongoose to create a schema and model
    - Using models/cars
  - Using mongoose to create, read, update and delete data
    - Using the routes/carRoute.ts  
2. Docker
  - Using docker to build a docker image with below commands
  - Using Dockerfile to build a docker image with the application build inside
  - Using `docker build`, `docker tag`, `docker login`, `docker push` to push the docker image to docker hub.

## Mongoose
## Docker
### Commands:
- `npm run build .`
- `docker build -t mongoose-demo .`
- `docker run -p 3000:3000 --name cars_app mongoose-demo:latest`
- `docker tag 8570cc73892e webtrade/cars_app:v1`
- `docker login -u webtrade` and provide password to account 
- `docker push webtrade/cars_app:v1`
- `scp docker-compose.yml root@<ip>:/root/devops/cars_app/`
- `scp .env root@<ip>:<location>`
- `docker-compose up`# repo auto created

### Api endpoints:
- `GET /api/v1/cars` - get all cars
- `GET /api/v1/cars/:id` - get car by id
- `POST /api/v1/cars` - create new car
- `PUT /api/v1/cars/:id` - update car by id
- `DELETE /api/v1/cars/:id` - delete car by id

