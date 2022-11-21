const express = require('express');

let app = express.Router();

app.get('/api/', function (req, res) {
    res.render("index", { role: req.session.role });
});

module.exports = app;