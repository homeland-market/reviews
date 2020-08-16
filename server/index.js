const path = require('path');
const express = require('express');
const models = require('./models/api.js');

const PORT = 2373;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/products/', express.static(path.join('./public')));
app.use('/products/:id', express.static(path.join('./public')));

app.get('/api/reviews/:id', (req, res) => {
  const requestId = req.params.id;
  models.getAll([requestId], (error, reviews) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.put('/api/reviews/helpful/:id', (req, res) => {
  const { helpful, id } = req.body;
  models.updateHelpful([helpful, id], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(PORT, () => console.log(`🚀🚀 review server connected!\n🚀🚀 Listening on ${PORT}`));
