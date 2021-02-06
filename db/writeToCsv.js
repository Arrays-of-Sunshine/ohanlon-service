const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

let counter = 0;

const createItemsData = () => {
  writer.pipe(fs.createWriteStream(__dirname + '/seed/itemsData.csv'));
  for (let i = 0; i < 10; i++) {
    writer.write({
      id: counter++,
      price: faker.commerce.price()
    })
  }

  //writer.end();
  console.log('done');
};

createItemsData();

const createReviewData = () => {
  writer.pipe(fs.createWriteStream(__dirname + '/seed/reviewData.csv'));
  for (let i = 0; i < 10; i++) {
    writer.write({
      id: i,
      price: faker.commerce.price()
    })
  }

  //writer.end();
  console.log('done');
};

createReviewData();

const createRatingsData = () => {
  writer.pipe(fs.createWriteStream(__dirname + '/seed/ratingsData.csv'));
  for (let i = 0; i < 10; i++) {
    writer.write({
      id: i,
      price: faker.commerce.price()
    })
  }

  //writer.end();
  console.log('done');
};

createRatingsData();

const createTagsData = () => {
  writer.pipe(fs.createWriteStream(__dirname + '/seed/tagsData.csv'));
  for (let i = 0; i < 10; i++) {
    writer.write({
      id: i,
      price: faker.commerce.price()
    })
  }

  //writer.end();
  console.log('done');
};

createTagsData();

const createImagesData = () => {
  writer.pipe(fs.createWriteStream(__dirname + '/seed/imagesData.csv'));
  for (let i = 0; i < 10; i++) {
    writer.write({
      id: i,
      price: faker.commerce.price()
    })
  }

  writer.end();
  console.log('done');
};

createImagesData();
