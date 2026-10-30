FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

EXPOSE 3001

CMD ["npm", "run", "dev"]
