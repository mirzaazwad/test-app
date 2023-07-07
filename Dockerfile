
FROM node:18-alpine AS build


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .

EXPOSE 8080


CMD ["npm", "run", "dev"]