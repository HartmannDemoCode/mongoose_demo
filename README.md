# Mongoose demo with docker
## Mongoose
## Docker
### Commands:
- `npm run build`
- `docker build -t mongoose-demo .`
- `docker run -p 3000:3000 --name cars_app mongoose-demo:latest`
- `docker tag 8570cc73892e webtrade/cars_app:v1`
- `docker login -u webtrade`
- `docker push webtrade/cars_app:v1`
- `scp docker-compose.yml root@<ip>:/root/devops/cars_app/`
- `scp .env root@<ip>:<location>`
- `docker-compose up`# repo auto created
