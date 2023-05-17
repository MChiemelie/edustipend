// Import required modules
const express = require('express');
const axios = require('axios');

// Create Express application
const app = express();

// Define API endpoints
app.get('/api/comments', (req, res) => {
  const limit = req.query.limit || 10; // Default limit to 10 if not provided
  axios
    .get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch comments' });
    });
});

app.get('/api/posts', (req, res) => {
  const limit = req.query.limit || 10; // Default limit to 10 if not provided
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch posts' });
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
