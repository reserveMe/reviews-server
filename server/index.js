const express = require('express');

const app = express();
const port = 3004;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./../database/index.js');

app.use('/restaurants/:id', express.static(`${__dirname}/../client/dist`));
app.use(morgan('tiny'));
app.use(bodyParser());

app.get('/api/restaurants/:restaurant_id/reviews', (req, res) => {
  let pageNum = 1;
  let sortQuery = 'newest';
  if (req.query.page) {
    pageNum = parseInt(req.query.page, 10);
  }
  if (req.query.sort) {
    sortQuery = req.query.sort;
  }
  let totalPages;
  const pageSize = 15;
  db.countReviews(parseInt(req.params.restaurant_id, 10), (err, totalCount) => {
    if (err) {
      console.log(err);
    }
    totalPages = Math.ceil(totalCount / pageSize);
  });
  db.retrieveReviews(parseInt(req.params.restaurant_id, 10), pageNum, sortQuery, (err, results) => {
    if (err) {
      console.log(err);
    }
    const response = {
      data: results,
      pageCount: totalPages,
    };
    res.send(response);
  });
});

app.patch('/api/reviews/:review_id', (req, res) => {
  db.updateHelpfulCount(parseInt(req.params.review_id, 10), (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(JSON.stringify(results));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
