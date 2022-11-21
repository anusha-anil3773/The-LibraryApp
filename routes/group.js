const express = require('express');
const BookData = require('../model/bookdata');

let app = express.Router();

app.get('/api/books', function (req, res) {
    BookData.find()
        .then(function (book) {
            res.send(book);
        })
});



app.get('/api/books/:_id', function (req, res) {
    let _id = req.params._id;
    BookData.findById(_id)
        .then(function (book) {
            res.send(book);
        });
});


module.exports = app;