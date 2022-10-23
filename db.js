const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/books';
const options = {
 //   useNewUrlParser: true,
  //  useUnifiedTopology: true,
};

mongoose.connect(uri, options);


const db = mongoose.connection;
module.exports = db;
