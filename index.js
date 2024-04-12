// console.log("Good morning!")
// console.log("Okay, I made it!")
// console.log("This is cool!")
// console.log(1+2)
// console.log(1*2)

// Import the necessary modules
const express = require('express');
const app = express();

// Define the default route
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>');
    res.write('<p>This is the default route.</p>');
    res.end();
});

// Define a custom route 1
app.get('/about', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>About Us</h1>');
    res.write('<p>This is the about page.</p>');
    res.end();
});

// Define a custom route 2
app.get('/contact', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Contact Us</h1>');
    res.write('<p>This is the contact page.</p>');
    res.end();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});