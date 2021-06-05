FROM bitwalker/alpine-elixir-phoenix:latest

RUN mkdir -p /app
WORKDIR /app

RUN mix local.hex --force && \
  mix local.rebar --force && \
  mix archive.install --force hex phx_new

COPY mix.exs .

COPY assets ./assets
WORKDIR /app/assets
RUN ["npm", "install"]
RUN node node_modules/webpack/bin/webpack.js --mode development

WORKDIR /app
COPY config ./config
COPY lib ./lib
COPY priv ./priv
COPY test ./test

RUN ["mix", "compile"]

# compile deps in test environment for faster test runs when built
RUN export MIX_ENV=test && mix deps.compile

# copy the deps in dev environment for faster builds
RUN ["mix", "deps.get"]
RUN ["mix", "deps.compile"]

#CMD ["mix", "do", "ecto.create", "ecto.migrate", "phx.server"]
