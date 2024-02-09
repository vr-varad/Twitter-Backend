const express = require('express')

const router = express.Router()

const { createTweet,getTweet } = require('../controllers/tweetController')
const {signUp,signIn} = require('../controllers/userController')
const {likeTweet} = require('../controllers/likeController')
const {createComment} = require('../controllers/commentController')

const authenticate = require('../middlewares/authenticate')

router.post('/tweet', createTweet)
router.get('/tweet/:id',getTweet)
router.post('/signup',signUp)
router.get('/signin',signIn)
router.post('/like/:id',authenticate,likeTweet)
router.post('/comment/:id',createComment)

module.exports = router