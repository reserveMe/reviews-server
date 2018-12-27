const express = require('express');

const app = express();
const port = 3004;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./../database/index.js');

app.use(morgan('tiny'));
app.use(bodyParser());

app.use('/api/restaurants/:id', express.static(`${__dirname}/../client/dist`));

app.get('/api/restaurants/:id/reviews', (req, res) => {
  let sortQuery = 'newest';
  if (req.query.sort) {
    sortQuery = req.query.sort;
  }
  const parsedId = parseInt(req.params.id, 10);
  db.retrieveReviews(parsedId, sortQuery, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
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
