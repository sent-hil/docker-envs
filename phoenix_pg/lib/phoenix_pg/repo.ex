defmodule PhoenixPg.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_pg,
    adapter: Ecto.Adapters.Postgres
end
