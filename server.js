const express = require('express');
const pool = require('./db/index.js');

const app = express();

app.get('/products' , (req, res) => {
  pool.query(`EXPLAIN ANALYZE SELECT * FROM intermediate WHERE id = 121`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
