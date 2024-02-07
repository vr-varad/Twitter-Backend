const UserRepository = require('../repository/userRepository');


class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    async createUser(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getByEmail(email){
        try {
            const user = await this.userRepository.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;