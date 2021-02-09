require('newrelic');
const express = require('express');
const pool = require('./db/index.js');

const app = express();

//  Retrieve all reviews
app.get('/products/:product_id/reviews' , (req, res) => {
  const query = 'SELECT * FROM review WHERE review_id = $1';
  const id = [req.params.product_id];
  pool.query(query, id, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(data.rows);
    }
  });
});

//  Retrieve all photos for given review id
app.get('/products/:product_id/reviews/:review_id/photos', (req, res) => {
  const query = 'SELECT * FROM images WHERE images_id = $1 AND review_id = $2';
  const id = [req.params.product_id, req.params.review_id];
  pool.query(query, id, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(data.rows);
    }
  });
});

//  Retrieve ratings for given review id
app.get('/products/:product_id/reviews/:review_id/rating', (req, res) => {
  const query = 'SELECT * FROM ratings WHERE items_id = $1 AND review_id = $2';
  const id = [req.params.product_id, req.params.review_id];
  pool.query(query, id, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(data.rows);
    }
  });
});

//  Retrieve all ratings
app.get('/products/:product_id/reviews', (req, res) => {
  const query = 'SELECT * FROM ratings WHERE product_id = $1';
  const id = [req.params.product_id];
  pool.query(query, id, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(data.rows);
    }
  });
});

//  Add or subtract 1 from 'helpful_count' for given review
app.patch('/reviews/:review_id/helpful', (req, res) => {

});

app.get('/products/analyze' , (req, res) => {
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
