const uri = 'mongodb://172.17.0.2:27017/fec';
const mongoose = require('mongoose');

const serverOptions = {
  auto_reconnect: true,
  socketOptions: {
    keepAlive: 1,
    connectTimeoutMS: 9000000,
    socketTimeoutMS: 9000000,
  },
};
const conn = mongoose.createConnection(uri, {
  server: serverOptions,
});

const reviewsSchema = mongoose.Schema({
  restaurant: {
    id: Number,
  },
  reviewer: {
    id: {
      type: Number,
      unique: true,
    },
    nickname: String,
    location: String,
    review_count: Number,
    date_dined: Date,
  },
  review: {
    id: {
      type: Number,
      unique: true,
    },
    ratings: {
      overall: Number,
      food: Number,
      service: Number,
      ambience: Number,
      value: Number,
      noise_level: String,
    },
    recommend_to_friend: Boolean,
    text: String,
    helpful_count: Number,
    tags: [String],
  },
});

const Review = conn.model('Review', reviewsSchema);

const save = (reviews, callback) => {
  Review.insertMany(reviews, callback);
};

const retrieveReviews = (restId, sort, callback) => {
  let sortQuery;
  if (sort === 'newest') {
    sortQuery = { 'reviewer.date_dined': -1 };
  } else if (sort === 'highest_rating') {
    sortQuery = { 'review.ratings.overall': -1 };
  } else if (sort === 'lowest_rating') {
    sortQuery = { 'review.ratings.overall': 1 };
  }
  Review.find({ restaurant: { id: restId } })
    .sort(sortQuery)
    .exec(callback);
};

module.exports = {
  conn,
  save,
  retrieveReviews,
};
