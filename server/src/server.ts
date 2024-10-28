


// Import the routes


// TODO: Serve static files of entire client dist folder
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client dist folder
app.use(express.static(path.join(__dirname, 'client/dist')));

// Handle any requests that don't match the above





// TODO: Implement middleware for parsing JSON and urlencoded form data
// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: Implement middleware to connect the routes
// Middleware function


const loggerMiddleware = (req: Request, res: Response) => {
    console.log(`${req.method} request for '${req.url}'`);
     // Pass control to the next middleware or route handler
};

// Use the middleware for all routes
app.use(loggerMiddleware);
app.use(express.json()); // Middleware to parse JSON bodies



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Start the server on the port

