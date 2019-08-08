FROM ruby:2.5 .1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
COPY . /myapp

RUN gem install bundler -v 1.17.3 && \
    bundle install


# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]