FROM node:20-alpine

WORKDIR /practice

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]