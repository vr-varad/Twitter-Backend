const LikeService = require('../services/likeService')

const likeTweet = async (req, res) => {
    try {
        const { id } = req.params;
    const { userId } = req.body;
    const likeService = new LikeService();
    const like = await likeService.toggle(id, 'Tweet', userId);
    res.status(200).json({ like,msg: "SuccessFully created a Like" });``
    } catch (error) {
        return res.status(500).json({msg: 'Internal server error'})
    }
}


module.exports = { likeTweet }