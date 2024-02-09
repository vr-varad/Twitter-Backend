const CommentRepository = require('../repository/commentRepository');
const Tweet = require('../models/tweet');
const Comment = require('../models/comment');

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
    }
    
    async createComment(comment) {
        const model = comment.onModel;
        const commentableId = comment.commentable;
        let tweet, existingComment;
        if(model==='Tweet'){
            tweet = await Tweet.findById(commentableId);
        }else if(model==='Comment'){
            existingComment = await Comment.findById(commentableId);
            const newComment = await this.commentRepository.create(new Comment({...comment, onModel: model, commentable: commentableId}));
            existingComment.comments.push(newComment._id);
            await existingComment.save();
            return {newComment, status: true};
        }else{
            throw new Error('Invalid model type');
        }
        const exists = await this.commentRepository.findOne({content:comment.content,user:comment.user,onModel:comment.onModel,commentable:comment.commentable});
        if(exists){
            throw new Error('Comment already exists');
        }else{
            if(model==='Tweet'){
                const newComment = await this.commentRepository.create(new Comment({...comment, onModel: model, commentable: commentableId}));
                tweet.comments.push(newComment._id);
                await tweet.save();
            }
            
            return await this.commentRepository.create(new Comment({...comment, onModel: model, commentable: commentableId}));
        }
    }
}
module.exports=CommentService;