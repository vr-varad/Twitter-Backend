const upload = require('../config/file_upload_s3')
const TweetService = require('../services/tweetService')
const tweetService = new TweetService()

const singleUpload = upload.single('image')


const createTweet = async(req,res)=>{
   try {
        singleUpload(req, res, async function(err) {
            if (err) {
                console.log(err)
                }

            const payload = {...req.body}
            if(req.file){
                payload.image = req.file.location
            }
            const tweet = await tweetService.create(payload)
            return res.status(201).json({
                success: true,
                data: tweet,
                message: 'Tweet created successfully',
                err : {}
            })
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