# Use an official Node.js base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the project files to the container
COPY . .

EXPOSE 8080

# Set the command to start the server
CMD ["npm", "run", "dev"]