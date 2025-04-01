#FROM node:10.19.0
FROM node:alpine

COPY package*.json ./

RUN npm i

COPY . ./

ENTRYPOINT [ "npm", "start" ]
