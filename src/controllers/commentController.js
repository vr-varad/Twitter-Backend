const CommentService = require('../services/commentService');
const commentService = new CommentService();

const createComment = async (req, res) => {
    try {
        const {content, user, onModel} = req.body;
        const commentable = req.params.id
        const comment = {content,user,onModel,commentable};
        const response = await commentService.createComment(comment);
        res.status(201).json({
            message: 'Comment created successfully',
            data: response
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createComment
};