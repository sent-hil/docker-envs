require 'bundler'
Bundler.require

require 'sinatra'
require 'sinatra/reloader'

get '/' do
  'Hello world!'
end
