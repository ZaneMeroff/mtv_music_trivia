FROM node:12-stretch

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

CMD ["npm", "start"]