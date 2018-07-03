# Mult stage build for production
## First prepare and compile all JS deps
FROM node:9.11 as build-deps

RUN mkdir -p /unb-feelings-web-app
WORKDIR /unb-feelings-web-app

COPY package.json /unb-feelings-web-app/package.json
COPY yarn.lock /unb-feelings-web-app/yarn.lock

COPY . /unb-feelings-web-app

RUN yarn install

ENV REACT_APP_API_HOST_URL http://api-port
ENV NODE_ENV production

RUN yarn build


## Then setup nginx with the compiled JS deps
FROM nginx:1.14-alpine

# Change default nginx because of react router
RUN rm -rf /etc/nginx/conf.d
COPY ./compose/prod/conf /etc/nginx

COPY --from=build-deps /unb-feelings-web-app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
