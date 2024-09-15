const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');  // Importe o pacote cors
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/bookdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
