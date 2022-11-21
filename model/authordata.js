const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/Library?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    title: String,
    country: String,
    dob : String,
    image : String,
    about : String,
    FamousWorks :String,
});

var AuthorData = mongoose.model('author',AuthorSchema);

module.exports = AuthorData;