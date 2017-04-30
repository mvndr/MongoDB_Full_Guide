const assert = require('assert');
const User = require('../src/user.model');

describe('Creating a records' ,() =>{

    it('Saves a user', () =>{
        // assert(1+1 ===2);

        // creating new user
        const Manvender = new User({ name: 'Manvender' });
        
        //SAVE model
        Manvender.save();
    });

});