const express = require('express');
const BookData = require('../model/bookdata');
const AuthorData = require('../model/authordata');
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

// app.post('/api/add_author', function (req, res) {   //add image author
//     let item = {
//         title: req.body.author.title,
//         country: req.body.author.country,
//         image: req.body.author.image,
//         about: req.body.author.about,
//         dob: req.body.author.dob,
//         FamousWorks: req.body.author.FamousWorks
//     }

//     let author = AuthorData(item);
//     author.save().then(function (data) {
//         res.send(true)
//     }).catch(function (error) {
//         res.send(false)
//     })

// });


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

// app.post('/api/update_author', function (req, res) {
    
//     let item = {
//         title: req.body.author.title,
//         country: req.body.author.country,
//         image: req.body.author.image,
//         about: req.body.author.about,
//         dob: req.body.author.dob,
//         FamousWorks: req.body.author.FamousWorks
//     }

//     let _id = req.body.author._id;
//     let updateAuthor = { $set: item };

//     AuthorData.updateOne({ _id: _id }, updateAuthor)
//         .then((respond) => {
//             if (respond) {
//                 console.log('mongo updated successfully for author')
//                 res.send(true)
//             }
//             else {
//                 console.log('mongo update error', error)
//                 res.send(false)
//             }
//         })

// });






//-------------------------------------------------- author--------------------//










module.exports = app;