
\c sdc;

CREATE TABLE Items (
  items_id INT GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  PRIMARY KEY  (items_id)
);

CREATE TABLE Review (
  review_id INT GENERATED ALWAYS AS IDENTITY,
  recommendation BOOLEAN NOT NULL,
  revUser TEXT NOT NULL,
  revDate TEXT NOT NULL,
  verified BOOLEAN,
  helpful INT NOT NULL,
  notHelpful INT NOT NULL,
  revDes TEXT,
  items_id INT,
  PRIMARY KEY (review_id),
  CONSTRAINT fk_items
    FOREIGN KEY(items_id)
      REFERENCES Items(items_id)
);

CREATE TABLE Ratings (
  ratings_id INT GENERATED ALWAYS AS IDENTITY,
  rating INT NOT NULL,
  revNum INT NOT NULL,
  items_id INT,
  review_id INT,
  PRIMARY KEY (ratings_id),
  CONSTRAINT fk_items
    FOREIGN KEY(items_id)
      REFERENCES Items(items_id),
  CONSTRAINT fk_review
    FOREIGN KEY(review_id)
      REFERENCES Review(review_id)
);

CREATE TABLE Tags (
  tags_id INT GENERATED ALWAYS AS IDENTITY,
  tag TEXT[],
  tagRating INT[],
  review_id INT,
  PRIMARY KEY(tags_id),
  CONSTRAINT fk_review
    FOREIGN KEY(review_id)
      REFERENCES Review(review_id)
);

CREATE TABLE Images (
  images_id INT GENERATED ALWAYS AS IDENTITY,
  images TEXT[],
  review_id INT,
  PRIMARY KEY (images_id),
  CONSTRAINT fk_review
    FOREIGN KEY(review_id)
      REFERENCES Review(review_id)
);
