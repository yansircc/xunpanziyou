# Use the official Node.js Alpine image for a smaller base
FROM node:current-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install --production --legacy-peer-deps

# Build the application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_PUBLIC_SITE_URL="https://www.xunpanziyou.com"
ENV NODE_ENV=production
RUN npm run build

# Production image, copy standalone server and dependencies
FROM base AS runner
WORKDIR /app

# Copy only the necessary files for standalone mode
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the application using the standalone server
CMD ["node", "server.js"]