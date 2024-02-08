const Tweet = require('../models/tweet')

class TweetRepository {
    async createTweet(data){
        try {
            const tweet = await Tweet.create(data)
            return tweet;
        } catch (error) {
            return {
                msg: "Failure",
                error
            }
        }
    }
    async getAllTweet(){
        try {
            const tweets = await Tweet.find({})
            return tweets
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    async getTweet(id){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id);
            return tweet;
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    async deleteTweet(id){
        try {
            const result=  await Tweet.deleteOne({_id : id});
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