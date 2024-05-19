# Matrix AppStore

This project is a web application built with React, TypeScript, and Tailwind CSS. It uses Redux Toolkit for state management and React Router for routing. The application also supports dark and light themes.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)

## Running the Project

This project is composed of a frontend and a backend, which can be run simultaneously using [Concurrently](https://www.npmjs.com/package/concurrently).

## Running the Application Locally

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install`.
4. Navigate to the backend directory and install the dependencies:

   ```bash
   cd backend
   npm install

   Navigate to the frontend directory and install the dependencies:
   cd ../frontend
   npm install
   ```

To start both the frontend and backend servers at the same time, navigate to the backend directory and run the following command:

```bash
npm run dev
```

```bash
Second option:

Start the backend

cd backend
npm start

In a new terminal window, start the frontend

cd ../frontend
npm start

```

The frontend server will be running on http://localhost:3000 and the backend server will be running on http://localhost:8080 (or whatever ports you have configured).

Setting Up the Proxy Server
This application uses a proxy server to handle requests. To set up the proxy server, follow these steps:

Navigate to the proxy-server directory (replace proxy-server with the actual directory name if it's different).
Install the proxy server dependencies with npm install.
Start the proxy server with npm start.
The proxy server must be running for the application to function correctly. The application is configured to send requests to the proxy server, which then forwards them to the actual server.
