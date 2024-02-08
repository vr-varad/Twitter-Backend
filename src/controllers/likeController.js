const LikeService = require('../services/likeService')

const likeTweet = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.user)
        const { userId } = req.body;
        const likeService = new LikeService();
        const like = await likeService.toggle(id, 'Tweet', userId);
        like.status ? res.status(200).json({msg: 'Tweet liked'}) : res.status(200).json({msg: 'Tweet unliked'})
    } catch (error) {
        return res.status(500).json({msg: 'Internal server error'})
    }
}


module.exports = { likeTweet }