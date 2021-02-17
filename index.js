const express = require('express');
const app = express();
const port = 8080;
const db = require("./models/db");
const User = db.user;
const FormData = db.formData;
const dbConfig = require('./config/db.config')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection successful");
})
.catch( (err) => {
    console.log(err);
    process.exit();
})

const connection = mongoose.connection;

app.use(bodyParser.json())
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public', {extensions: ['html']}))

app.post('/auth/signin',(req, res) => {
    //const newUser = new User({username: req.body.username, password: req.body.password})
    User.findOne({username: req.body.username}, (err, user) => {
        if (user == null) {
            res.sendStatus(400); //user not found
        } else {
            if (user.password === req.body.password) {
                res.cookie('username', req.body.username)
                res.sendStatus(200);
            } else {
                res.sendStatus(401); //Wrong password
            }
        }
    })
});

app.post('/auth/register', (req, res) => {
    User.create({username: req.body.username, password: req.body.password}, (err, small)  => {
        if (err) {
            res.sendStatus(401) //Couldnt register.
        } else {
            res.cookie('username', req.body.username)
            res.sendStatus(200);
        }
    })
})

app.post('/form', (req, res) => {
    FormData.create({
        username: req.body.username,
        rating: req.body.formdata
    }, (err, small) => {
        if (err) {
            res.sendStatus(401) //Couldnt save val
        } else {
            res.sendStatus(200)
        }
    })
})

app.listen(port, () => {
    console.log(`Sever listening on port ${port}`)
});