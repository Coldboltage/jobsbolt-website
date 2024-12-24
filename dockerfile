# Use Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
