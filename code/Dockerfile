# Use an official Node.js base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Build the project
RUN npm run build

# Expose the desired port (optional)
EXPOSE 5173

# Set the command to start the server
CMD ["npm", "run", "dev"]

