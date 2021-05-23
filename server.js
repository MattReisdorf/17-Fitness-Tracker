// Server Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');


// PORT
const PORT = process.env.PORT || 3001;

// Create Express App
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Establish Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Routing Stuff
app.use(require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'))

// Run Server
app.listen(PORT, () => {
    console.log('App Running');
});
