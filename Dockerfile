FROM node:18
WORKDIR /user-api
COPY . .
RUN npm i 
ENTRYPOINT node ./dist/index.js