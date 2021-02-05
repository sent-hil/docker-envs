# docker-envs

This repo contains examples on how to run various applications using Docker. So far there is:

- node-local-dev - Uses base `node:latest` image, mounts repo as volume in docker. It's a express app that can restart based on changes in files.
- node-pg-local-dev - Builds on top of node-local-dev to connect Express app to PG running in a different container. PG data is stored in a persistent volume.
- sinatra - Uses base `ruby:2.7.2` image, mounts repo as volume in docker. It's a Sinatra app that can restart based on changes in files.
- sinatra - Similar to sinatra, but uses Dockerfile to create the container.
