// Server Dependencies
const express = require('express');
const mongoose = require('mongoose');


// PORT
const PORT = process.env.PORT || 3001;

// Create Express App
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Establish Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Routing Stuff
// app.use(require('./routes/'))
// app.use(require('./routes/'))

// Run Server
app.listen(PORT, () => {
    console.log('App Running');
});
