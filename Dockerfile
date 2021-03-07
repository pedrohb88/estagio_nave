FROM node:12.18.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000
ENV PG_HOST=postgre
ENV PG_DATABASE=estagio_nave
ENV PG_USER=postgres
ENV PG_PASSWORD=0000

EXPOSE 5000

CMD [ "npm" , "start"]