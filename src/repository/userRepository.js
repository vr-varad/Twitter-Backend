const crudRepository = require('./crudRepository');

const User = require('../models/user');

class UserRepository extends crudRepository {
    constructor() {
        super(User);
    }
}

module.exports = UserRepository;