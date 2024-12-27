# Use Node.js image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Accept build-time arguments
ARG NEXT_PUBLIC_SERVER_API_URL
ARG NEXT_PUBLIC_CLIENT_API_URL

# Make the variable available in the runtime environment
ENV NEXT_PUBLIC_SERVER_API_URL=${NEXT_PUBLIC_SERVER_API_URL}
ENV NEXT_PUBLIC_CLIENT_API_URL=${NEXT_PUBLIC_CLIENT_API_URL}

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build the application (uses the environment variable during the build)
RUN npm run build

# Expose the port your app runs on
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
