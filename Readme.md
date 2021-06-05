# docker-envs

Since I got my new Macbook in 2021, I have been making an effort to do development through Docker instead of polluting various versions of development environments. This repo contains examples of how to run various applications using Docker. So far, there are:

- node-local-dev - Uses base `node:latest` image, mounts repo as volume in docker. It's an express app that can restart based on changes in files.
- node-pg-local-dev - Builds on top of node-local-dev to connect Express app to PG running in a different container. PG data is stored in a persistent volume.
- sinatra - Uses base `ruby:2.7.2` image, mounts repo as volume in Docker. It's a Sinatra app that can restart based on changes in files.
- sinatra - Similar to sinatra, but uses Dockerfile to create the container.
- nuxt-tailwind - Uses base `node:latest` image. It's a nuxt app with tailwind and can restart based on changes in files.
