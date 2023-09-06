const express = require('express');
const app = express();
const port = 8080;

app.get('/demo', (req, res) => {
  const { name } = req.query;
  
  if (name) {
    res.json({ message: `Hello, ${name}!` });
  } else {
    res.json({ message: 'Hello, Stranger!' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
