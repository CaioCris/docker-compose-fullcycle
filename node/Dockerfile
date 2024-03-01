FROM node:18

WORKDIR /usr/src/app

COPY ./index.js ./index.js 
COPY ./package.json ./package.json

RUN apt-get -q update && apt-get -qy install wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

RUN npm install package.json

EXPOSE 3000
