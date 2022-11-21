const express = require('express');
const BookData = require('../model/bookdata');
let app = express.Router();


app.delete('/api/deletebook/:_id', function (req, res) {
    let _id = req.params._id;
    BookData.findByIdAndDelete({ _id: _id },
        (err, result) => {
            if (err) {
                res.send(false)
            } else {
                res.send(true)
            }
        });
});

//deleteauthor

// app.delete('/deleteauthor/:_id', function (req, res) {
//     let _id = req.params._id;
//     AuthorData.findByIdAndDelete({ _id: _id },
//         (err, result) => {
//             if (err) {
//                 res.send(false)
//             } else {
//                 res.send(true)
//             }
//         });
// });


module.exports = app;