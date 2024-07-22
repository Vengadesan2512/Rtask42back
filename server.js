const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const urlRoutes = require('./wrilRoutes');

const app = express();
const PORT = 5000;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});