const express = require('express');
const BookData = require('../model/bookdata');

const path = require('path');



let app = express.Router();

//-------------------------------------------------- Newly Added--------------------//


app.post('/api/add_book', function (req, res) { //image add book
    let item = {
        title: req.body.book.title,
        pageCount: req.body.book.pageCount,
        publishedDate: req.body.book.publishedDate,
        image: req.body.book.image,
        about: req.body.book.about,
        language: req.body.book.language,
        author: req.body.book.author,
        categories: req.body.book.categories
    }
    let book = BookData(item);
    book.save().then(function (data) {
        res.send(true)
    }).catch(function (error) {
        res.send(false)
    })

});


//-------------------------------------------------- Updated-------------------//



app.post('/api/update_book', function (req, res) {
    let item = {
        title: req.body.book.title,
        pageCount: req.body.book.pageCount,
        publishedDate: req.body.book.publishedDate,
        image: req.body.book.image,
        about: req.body.book.about,
        language: req.body.book.language,
        author: req.body.book.author,
        categories: req.body.book.categories
    }

    let _id = req.body.book._id;
    let updateBook = { $set: item };

    BookData.updateOne({ _id: _id }, updateBook)
        .then((respond) => {
            if (respond) {
                console.log('mongo updated successfully for book')
                res.send(true)
            }
            else {
                console.log('mongo update error', error)
                res.send(false)
            }
        })

});







module.exports = app;