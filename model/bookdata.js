const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/Library?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: String,
    pageCount: String,
    publishedDate : String,
    image : String,
    about : String,
    language :String,
    author : String,
    categories : String


});

var BookData = mongoose.model('book',BookSchema);

module.exports = BookData;