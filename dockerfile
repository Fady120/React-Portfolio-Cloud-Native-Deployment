# Stage 1: build the React app
FROM node:24-alpine AS builder

# install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false

# copy the rest of the source, build
COPY . .
RUN npm run build

# Stage 2: serve the built assets
FROM node:24-alpine AS runner

# create a non-root user and group
RUN addgroup -S appgroup \
 && adduser -S appuser -G appgroup

WORKDIR /app

# copy only the build output
COPY --from=builder /app/build ./build

# install the lightweight static server
RUN npm install -g serve && \
    chown -R appuser:appgroup /app

# switch to non-root
USER appuser

# expose the port your app will run on
EXPOSE 3000

# launch the server
ENTRYPOINT ["serve", "-s", "build", "-l", "3000"]