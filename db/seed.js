const pool = require('./index.js');

pool.query(`COPY items FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY review FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY ratings FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY tags FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});

pool.query(`COPY images FROM '${__dirname}/seed/data.csv' DELIMITER ',' CSV HEADER`, (err, data) => {
  console.log(err, data);
});
