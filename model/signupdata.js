const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/Library?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({

    Username: String,
    Password: String,
    Email : String
                
});

var SignUpData = mongoose.model('signup',SignUpSchema);

module.exports = SignUpData;