const HashTags = require('../models/hashTag')

class TweetRepository {
    async createHastage(tag){
        try {
            const hashTag = await HashTags.create({tag  })
            return hashTag;
        } catch (error) {
            return {
                msg: "Failure",
                error
            }
        }
    }
    async bulkCreate(data){
        try {
            const hashTag = await HashTags.insertMany(data)
            return hashTag;
        } catch (error) {
            return {
                msg: "Failure",
                error
            }
        }
    }
    async getByName(tag){
        try {
            const hashTag = await HashTags.find({text: tag});
            return hashTag;
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    async getHashTag(id){
        try {
            const hashTag = await HashTags.findByIdAndUpdate(id);
            return hashTag;
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    async deleteHashTags(id){
        try {
            const result=  await HashTags.deleteOne({_id : id});
            if(!result) throw new Error('No such Tweet found');
            return  {msg:'Deleted'}
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
}

module.exports = TweetRepository