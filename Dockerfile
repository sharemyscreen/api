FROM debian:sid

# Install app dependencies
COPY package.json /src/package.json
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs build-essential python
RUN npm install --global node-gyp gulp
RUN cd /src; npm install --production

# Bundle app sources
COPY . /src
RUN cd /src; gulp build

EXPOSE 4000
CMD ["node", "/src/index.js"]
