const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Debugging queries in the console
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));