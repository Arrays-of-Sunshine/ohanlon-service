const pool = require('./index.js');

pool.query(`COPY intermediate FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`INSERT INTO items SELECT id, items_title FROM intermediate`, (err, data) => {
  console.log(err, data);
});

pool.query(`INSERT INTO review SELECT id, revRec, revUser, revDate, revVerified, revHelpful, revNotHelpful, revDes, id FROM intermediate`, (err, data) => {
  console.log(err, data);
});

pool.query(`INSERT INTO ratings SELECT id, rating, ratingRev, id, id FROM intermediate`, (err, data) => {
  console.log(err, data);
});

pool.query(`INSERT INTO tags SELECT id, tag, tagRating, id FROM intermediate`, (err, data) => {
  console.log(err, data);
});

pool.query(`INSERT INTO images SELECT id, images, id FROM intermediate`, (err, data) => {
  console.log(err, data);
});
