FROM node:20

WORKDIR /docker-app

COPY . .

CMD [ "node", "/docker-app/server.js" ]