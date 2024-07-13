const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bookdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
