const express = require('express')

const router = express.Router()

const { createTweet,getTweet } = require('../controllers/tweetController')
const {signUp,signIn} = require('../controllers/userController')
const {likeTweet} = require('../controllers/likeController')

router.post('/tweet', createTweet)
router.get('/tweet/:id',getTweet)
router.post('/signup',signUp)
router.get('/signin',signIn)
router.post('/like/:id',likeTweet)

module.exports = router