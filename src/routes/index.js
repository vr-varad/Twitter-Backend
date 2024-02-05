const express = require('express')

const router = express.Router()

const { createTweet,getTweet } = require('../controllers/tweetController')

router.post('/tweets', createTweet)

module.exports = router