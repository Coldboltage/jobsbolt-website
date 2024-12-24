# Stage 1: Build the application
FROM node:18-slim AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production runtime
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port your app runs on
EXPOSE 1337

# Start the application
CMD ["npm", "start"]