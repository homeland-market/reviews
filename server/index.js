/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const models = require('./models/api.js');

const PORT = process.env.PORT || '5004';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.resolve('./public')));
app.use('/products/', express.static(path.resolve('./public')));
app.use('/products/:id', express.static(path.resolve('./public')));

app.get('/api/reviews/:id', (req, res) => {
  const requestId = req.params.id;
  models.getAll([requestId], (error, reviews) => {
    if (error) {
      res.status(500).send('An error occurred while retrieving reviews.');
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.put('/api/reviews/helpful/:id', (req, res) => {
  const { helpful, id } = req.body;
  models.updateHelpful([helpful, id], (error, results) => {
    if (error) {
      res.status(500).json('An error occurred while updating the helpful count.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(PORT, () => console.log(`\n
  ===========================`, '\x1b[36m',
'\n 🆁', '\x1b[37m', 'server connected!', '\x1b[35m',
'\n 🅴', '\x1b[37m', `listening on port: ${PORT}!`));
