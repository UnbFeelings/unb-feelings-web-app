from node:9.8.0

run mkdir /unb-feelings-web-app
workdir /unb-feelings-web-app

copy package.json /unb-feelings-web-app/package.json

run npm install --silent
run npm install react-scripts@1.1.1 -g --silent

cmd npm start