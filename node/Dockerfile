FROM node:18

WORKDIR /usr/src/app

COPY . . 

RUN npm install

RUN apt-get -q update && apt-get -qy install wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for


EXPOSE 3000

# CMD ["node", "index.js"]