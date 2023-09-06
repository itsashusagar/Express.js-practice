const express = require('express');
const app = express();
const port = 8080;

app.get('/data', (req, res) => {
  const { name, age, subject } = req.query;
  
  if (name && age && subject) {
    // Respond with a JSON object containing all query parameters
    res.json({ name, age, subject });
  } else {
    // Respond with an error message if any parameter is missing
    res.status(400).json({ error: 'Missing parameters' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
