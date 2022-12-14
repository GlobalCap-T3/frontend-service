FROM node:lts

WORKDIR /opt

COPY package.json package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]