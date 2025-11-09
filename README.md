# Backend Express App

A simple Express.js application containerized with Docker.

## Prerequisites

- Node.js (v22 or higher)
- Docker

## Installation

Install dependencies:

```bash
npm install
```

## Running Locally

Start the server:

```bash
npm start
```

The app will run on `http://localhost:3000`

## Docker

### Build the Image

```bash
docker build -t express .
```

### Run the Container

Basic run:

```bash
docker run -p 3000:3000 express
```

Run with custom port:

```bash
docker run -p 8080:8080 -e PORT=8080 express
```

Run in detached mode:

```bash
docker run -d -p 3000:3000 --name express-app express
```

### Docker Commands

Stop the container:

```bash
docker stop express-app
```

Start the container:

```bash
docker start express-app
```

Remove the container:

```bash
docker rm express-app
```

View logs:

```bash
docker logs express-app
```

View running containers:

```bash
docker ps
```

Remove the image:

```bash
docker rmi express
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
```

Then run:

```bash
docker-compose up
```

## API Endpoints

- `GET /` - Returns a welcome message

## Project Structure

```
.
├── index.js           # Main application file
├── package.json       # Project dependencies
├── Dockerfile         # Docker configuration
├── .dockerignore      # Docker ignore rules
└── README.md          # This file
```
