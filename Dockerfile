FROM node:17.8.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 4000

RUN npm run build

CMD [ "node", "dist/index.js" ]
