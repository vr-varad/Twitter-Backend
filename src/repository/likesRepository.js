const CrudRepository = require('./crudRepository')
const Likes = require('../models/like')


class LikeRepository extends CrudRepository {
    constructor() {
        super(Likes);
    }
}

module.exports = LikeRepository;