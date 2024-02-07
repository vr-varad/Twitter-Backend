const likeRepository = require('../repository/likesRepository');
const tweetRepository  = require('../repository/tweetRepository');

class LikeService{
    constructor(){
        this.likeRepository = new likeRepository();
        this.tweetRepository = new tweetRepository();  
    }
    async toggle(modelId,modelType,userId){
        let likeable;
        if(modelType=='Tweet'){
            likeable = await this.tweetRepository.getTweet(modelId)
        }else if(modelType=='Comment'){

        }else{
            throw new Error('Invalid model type');
        }
        const exists = await this.likeRepository.findOne({likeable:modelId,onModel:modelType,user:userId});
        console.log(exists);
        if(exists){
            await this.likeRepository.delete(exists._id);
            return null;
        }else{
            const newLike =  await this.likeRepository.create({likeable:modelId,onModel:modelType,user:userId});
            likeable.likes.push(newLike._id);
            await likeable.save();
            return newLike;
        }

    }
}


module.exports = LikeService;