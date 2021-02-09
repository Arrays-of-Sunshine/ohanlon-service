const pool = require('./index.js');

pool.query(`COPY intermediate FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

/* pool.query(`COPY items FROM '${__dirname}/seed/itemsData.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY review FROM '${__dirname}/seed/reviewData.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY ratings FROM '${__dirname}/seed/ratingsData.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY tags FROM '${__dirname}/seed/tagsData.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY images FROM '${__dirname}/seed/imagesData.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
}); */
