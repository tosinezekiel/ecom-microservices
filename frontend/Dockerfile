# frontend/Dockerfile
# FROM node:18-alpine

# WORKDIR /app

# Install dependencies
# COPY package*.json ./
# RUN npm install

# Copy project files
# COPY . .

# Build for production
# RUN npm run build

# Install serve to run the application
# RUN npm install -g serve

# Start the application
# CMD ["serve", "-s", "dist", "-l", "80"]

# Development Dockerfile (Dockerfile.dev)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]