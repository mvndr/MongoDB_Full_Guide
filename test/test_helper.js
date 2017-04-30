

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES6 implementation of Promise

//Execute one time check connection
before((done) => {
    mongoose.connect('mongodb://localhost/users_test'); // users_test is my database name in mongodb
mongoose.connection
    // .once('open', () => console.log('Good to go')) // Fat arror -->ES6 Stardard
    .once('open', () => { done();}) 
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});

// beforeEach hook run before each test
beforeEach((done)=>{
mongoose.connection.collections.users.drop(()=>{
    
    // ready to run next task
    done();
}); // delete the reord before each test run
})
