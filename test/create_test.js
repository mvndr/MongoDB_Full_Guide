const assert = require('assert');
const User = require('../src/user.model');

describe('Creating a records' ,(done) =>{

    it('Saves a user', () =>{
        // assert(1+1 ===2);

        // creating new user
        const Manvender = new User({ name: 'Manvender' });
        //insert record into database
        Manvender.save()
        .then(() =>{

            // Has Manvender sucessfully saved
            assert(!Manvender.isNew);
            done();
        });
    });

});