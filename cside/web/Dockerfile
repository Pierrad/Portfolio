FROM node:12.16.3-alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

ENV NODE_ENV=production

# install dependencies
RUN yarn install --production=false

# start app 
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]