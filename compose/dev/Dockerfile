FROM node:9.11

RUN mkdir -p /unb-feelings-web-app
WORKDIR /unb-feelings-web-app

COPY package.json /unb-feelings-web-app/package.json
COPY yarn.lock /unb-feelings-web-app/yarn.lock

RUN yarn install