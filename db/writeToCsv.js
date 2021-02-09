const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const createData = () => {
  let writer = csvWriter();
  let counter = 0;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/data.csv'));
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      items_id: counter++,
      items_title: faker.commerce.productName(),
      revRec: faker.random.boolean(),
      revUser: faker.name.firstName(),
      revDate: faker.date.recent(),
      revVerified: faker.random.boolean(),
      revHelpful: faker.random.number(14),
      revNotHelpful: faker.random.number(14),
      revDes: faker.lorem.sentence(),
      rating: faker.random.number(5),
      ratingRev: faker.random.number(200),
      tag: faker.commerce.productAdjective(),
      tagRating: faker.random.number(5),
      images: faker.image.cats()
    })
  }

  writer.end();
  console.log('Intermediate Table Done');
};

createData();

/* const createItemsData = () => {
  let writer = csvWriter();
  let counter = 1;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/itemsData.csv'));
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      items_id: counter++,
      title: faker.commerce.productName()
    })
  }

  writer.end();
  console.log('Items Done');
};

createItemsData();

const createReviewData = () => {
  let writer = csvWriter();
  let counter = 1;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/reviewData.csv'));
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      review_id: counter,
      recommendation: faker.random.boolean(),
      revUser: faker.name.firstName(),
      revDate: faker.date.recent(),
      verified: faker.random.boolean(),
      helpful: faker.random.number(14),
      notHelpful: faker.random.number(14),
      revDes: faker.lorem.sentence(),
      items_id: counter
    })
    counter++;
  }

  writer.end();
  console.log('Reviews Done');
};

createReviewData();

const createRatingsData = () => {
  let writer = csvWriter();
  let counter = 1;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/ratingsData.csv'));
  for (let i = 0; i < 1000000; i++) {
    writer.write({
      ratings_id: counter,
      rating: faker.random.number(5),
      revNum: faker.random.number(200),
      items_id: counter,
      review_id: counter
    })
    counter++;
  }

  writer.end();
  console.log('Ratings Done');
};

createRatingsData();

const createTagsData = () => {
  let writer = csvWriter();
  let counter = 1;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/tagsData.csv'));
  for (let i = 0; i < 2000000; i++) {
    writer.write({
      tags_id: counter,
      tag: faker.commerce.productAdjective(),
      tagRating: faker.random.number(5),
      review_id: counter
    })
    counter++;
  }

  writer.end();
  console.log('Tags Done');
};

createTagsData();

const createImagesData = () => {
  let writer = csvWriter();
  let counter = 1;
  writer.pipe(fs.createWriteStream(__dirname + '/seed/imagesData.csv'));
  for (let i = 0; i < 2000000; i++) {
    writer.write({
      images_id: counter,
      images: faker.image.cats(),
      review_id: counter
    })
    counter++;
  }

  writer.end();
  console.log('Images Done');
};

createImagesData(); */

console.log('Seeding Complete');