# My Express Server

This project sets up a simple Express server that listens on port 8001. It uses `nodemon` for automatic code reloading during development.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (optional, but recommended)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-6f5rfad1.git
   cd my-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the Express server, run:

```
docker build -t my-express-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 my-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License.