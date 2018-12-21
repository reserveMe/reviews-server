const uri = 'mongodb://localhost:27017/fec'
const mongoose = require('mongoose'); 
const serverOptions = {
    auto_reconnect: true,    
    socketOptions: {
        keepAlive: 1,    
        connectTimeoutMS: 9000000,    
        socketTimeoutMS: 9000000,
    }
};
const conn = mongoose.createConnection(uri, {
    server: serverOptions
});

const reviewsSchema = mongoose.Schema({
  restaurant: {
      id: Number,
  },
  reviewer: {
    _id: {
        type: Number,
        unique: true
    },
    nickname: String,
    location: String,
    review_count: Number,
    date_dined: String
  },
  review: {
    _id: {
        type: Number,
        unique: true
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

let Review = conn.model('Review', reviewsSchema);

const save = (reviews, callback) => {
    Review.insertMany(reviews, callback);
}

module.exports = {
    conn,
    save
}