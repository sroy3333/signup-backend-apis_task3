const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const signupRoute = require('./routes/signupRoute');

const signup = require('./models/signup');

var cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

app.signupRoute = require('./models/signup');

// Middleware setup
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/user/signup', signupRoute);

// Route for serving the signup form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

// Start the server
sequelize
.sync()
.then(result => {
    app.listen(5000);
})
.catch(error => {
    console.log(error);
});