const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
let app = express();

const port = process.env.PORT || 8887;

// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); //middleware portion for adding data
app.use(cors());
app.use(express.json());

app.use(session({      //session creation
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});


function verifyToken(req, res, next) {//token
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized request')
        }
        let token = req.headers.authorization.split(' ')[1]
        if (token === 'null') {
            return res.status(401).send('Unauthorized request')
        }
        let payload = jwt.verify(token, 'secretKey')
        if (!payload) {
            return res.status(401).send('Unauthorized request')
        }
        req.userId = payload.subject
        next()
    }

const path = require('path');
app.use(express.static('./dist/frontend'));

const login = require('./routes/login'); //login page
app.use('/login', login);
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

const home = require('./routes/home'); //homepage
app.use('/', verifyToken, home);

const group = require('./routes/group'); //books and author group page
app.use('/group', group);

const add = require('./routes/addform'); //add book and add author page
app.use('/add',verifyToken, add);

const dlete = require('./routes/delete'); //add book and add author page
app.use('/delete',verifyToken, dlete);

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});


app.listen(port, () => {
    console.log("Server is running at " + port)
});