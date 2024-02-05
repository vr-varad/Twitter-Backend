
const TweetService = require('../services/tweetService')
const tweetService = new TweetService()


const createTweet = async(req,res)=>{
   try {
        const tweet = await tweetService.create(req.body)
        return res.status(201).json({
            success: true,
            data: tweet,
            message: 'Tweet created successfully',
            err : {}
        })
   } catch (error) {
    return res.status(500).json({
        success: false,
        data: {},
        message: 'Tweet creation failed',
        err : error
    })
   }
}

const getTweet = async(req,res)=>{
    try {
        const tweet = await tweetService.getTweet(req.params.id)
        return res.status(200).json({
            success: true,
            data: tweet,
            message: 'Tweet fetched successfully',
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Tweet fetch failed',
            err : error
        })
    }
}

module.exports = {
    createTweet,
    getTweet
}