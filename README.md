# My Next.js and Express Project

## Project Structure

This project is a simple boilerplate for a Next.js application with an integrated Express backend. Here's an overview of the project structure:

```
my-nextjs-app/
│
├── pages/ # Frontend React components and pages
|
├── containers/ # contain pages components
|
├── tests/ # frontend tests
│
├── server_tests/ # Server-side tests
│
├── server/server.js # Express server setup 
│
├── package.json # Project dependencies and scripts
│
└── README.md # Documentation (you are here)
```

## Running Frontend Tests

To run tests for the frontend components and pages, you can use the following command:

```npm test```

This command will execute the Jest tests located in the __tests__ directory.

## Running Server Tests
To run tests for the server-side code in server.js, use the following command:

```npm run server-test```

This command will execute the Jest tests located in the __server_tests__ directory.

Please note that this is a basic setup. You can expand and customize it as needed for your project.

# Getting Started
To run the project locally, you can use the following commands:

## Running Server & Frontend

```
npm run dev 
npm run dev:server
```

This will launch the Next.js frontend and the Express server.
# podcast-backend
