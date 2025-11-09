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

Build the Docker image:

```bash
docker build -t express .
```

Run the container:

```bash
docker run -p 3000:3000 express
```

Or with a custom port:

```bash
docker run -p 8080:8080 -e PORT=8080 express
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
