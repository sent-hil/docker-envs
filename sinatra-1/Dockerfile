FROM ruby:2.7.2

WORKDIR /usr/src/app
COPY Gemfile /usr/src/app/
RUN bundle install

CMD ["bundle", "exec",  "rackup", "--host", "0.0.0.0", "-p", "4568"]
