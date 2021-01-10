# Node Dev in Docker

This folder contains an Express app running in an container that connects to a PG running in a different container.

Though in this example PG exposed to public through port: 8888, the exprses app is able to connect through Docker by using host: `node-pg-local-dev_pg_1`.

### Build
`docker-compose up --build`

### Stop
`docker-compose down --remove-orphans`

Since PG data is stored in volume, stopping or even removing the images won't affect it.

### Rebuild
If you make changes to `init.sql`, you need to remove the PG volume and then rebuild the containers from scratch.

* Stop containers; ``docker-compose down --remove-orphans``
* Find the volume: `docker volume ls`
* Remove it: `docker volume rm <name>` (probably node-pg-local-dev_postgres-data)

### PSQL
`psql -h 0.0.0.0 -p 8888 -U docker -d devdb` Password is `docker`. This can be changed in docker-compose.yml, but remember to follow the steps in `Rebuild` for it to work.