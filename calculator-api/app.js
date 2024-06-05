const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for addition
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        res.json({ result: a + b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Route for subtraction
app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        res.json({ result: a - b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Route for multiplication
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        res.json({ result: a * b });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Route for division
app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        if (b === 0) {
            res.status(400).json({ error: 'Division by zero' });
        } else {
            res.json({ result: a / b });
        }
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});
