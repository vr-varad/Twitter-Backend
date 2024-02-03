const express = require('express');
const connectDB = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');


const start = async () => {
    try {
        await connectDB();
        app.listen(3000, async() => {
            console.log('Server is running on port 3000');
            await Tweet.create({
                content : 'this is my first tweet',
                likes : 10,
                retweets : 5
            })
        });
    } catch (error) {
        console.log('Error connecting to the server: ', error);
    }
}

start();