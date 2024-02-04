const express = require('express');
const connectDB = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweetRepository')


const start = async () => {
    try {
        await connectDB();
        app.listen(3000, async() => {
            console.log('Server is running on port 3000');
            const tweetRepo = new TweetRepository()
            const tweet = await tweetRepo.deleteTweet('65bf9c26c0fe17b3f53308a7')
            console.log(tweet)
        });
    } catch (error) {
        console.log('Error connecting to the server: ', error);
    }
}

start();