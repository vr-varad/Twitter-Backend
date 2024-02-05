const tweetRepository = require('../repository/tweetRepository');
const hashtagRepository = require('../repository/hashtagRepository');

class TweetService{
    constructor(){
        this.tweetRepository = new tweetRepository();
        this.hashtagRepository = new hashtagRepository();
    }
    
    async create(data){
        try {
            const {content,likes,retweets,comments} = data;
            const tweet = await this.tweetRepository.createTweet({content,likes,retweets,comments});
            const regex = /#(\w+)/g;
            const tags = (content.match(regex) || []).map(match => match.replace('#', ''));
            let alreadyPresentTags = await this.hashtagRepository.getByName(tags)
            let textTags = alreadyPresentTags.map(tag => tag.text);
            let newTags = tags.filter(tag => !textTags.includes(tag));
            newTags = newTags.map(tag => ({text: tag,tweets: [tweet._id]}));
            await  this.hashtagRepository.bulkCreate(newTags)
            alreadyPresentTags.forEach(async(tag) => {
                tag.tweets = Array.isArray(tag.tweets) ? tag.tweets : [];
                tag.tweets.push(tweet._id);
                await tag.save();
            })
            return {
                tweet
            };
        } catch (error) {
            return {
                msg: "Failure",
                error
            }
        }

    }
    async getTweet(tweetID){
        try {
            const tweets = await this.tweetRepository.getTweet(tweetID);
            return {
                tweets
            };
        } catch (error) {
            return {
                msg: "Failure",
                error
            }
        }
    }
}

module.exports = TweetService