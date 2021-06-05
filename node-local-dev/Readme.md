# Node Dev in Docker

Source: https://auth0.com/blog/use-docker-to-create-a-node-development-environment/

## Without docker-compose

This setup keeps node_modules, package.json and yarn.lock and mounts it in the container.

### Build
`docker build -t node-docker .`

Create container from `node:latest` container, exposes 3000. Does not do setup.

### Run

```
docker run --rm -it --name node-docker \
    -v $PWD:/usr/src/app -p 8080:3000 \
    node-docker
```

The container has no node packages, I installed it manually the first time. However since package-lock.json is now in the repo, if container goes away, there is no need to run the install commands again.

## With docker-compose

### Run
`docker-compose run --rm --service-ports nod_dev_env`

### Build (optional)
If you make changes to Dockerfile `docker-compose up --build`. Without it, it'll use existing image.
