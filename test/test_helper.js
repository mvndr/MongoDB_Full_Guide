

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users_test'); // users_test is my database name in mongodb

mongoose.connection
    .once('open', () => console.log('Good to go')) // Fat arror -->ES6 Stardard
    .on('error', (error) => {
        console.warn('Warning', error);
    });

