FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM dependencies AS test

COPY . .
RUN npm test

FROM test AS build

ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
