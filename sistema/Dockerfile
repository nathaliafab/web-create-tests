FROM node:lts-alpine

WORKDIR /app

# Copy package.json to leverage Docker cache for dependencies
COPY package.json ./

# Install dependencies (since we don't have a package-lock.json locally yet, npm install will generate one in the container)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]