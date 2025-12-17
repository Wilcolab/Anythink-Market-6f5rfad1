# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use Nodemon for automatic code updates during development.

## Project Structure

```
express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # Configuration file for npm
├── .gitignore          # Specifies files to be ignored by Git
├── Dockerfile          # Instructions for building the Docker image
├── .dockerignore       # Specifies files to be ignored when building the Docker image
└── README.md           # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.