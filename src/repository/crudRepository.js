class CrudRepository { 
    constructor(model) {
        this.model = model;
    }
    
    async create(data) {
        try {
            return this.model.create(data);
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    
    async update(id, data) {
        try {
            return this.model.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    
    async delete(id) {
        try {
            return this.model.findByIdAndDelete(id);
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    
    async find() {
        try {
            return this.model.find();
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
    
    async findOne(query) {
        try {
            return this.model.findOne(query);
        } catch (error) {
            return {
                msg: 'Failure',
                error
            }
        }
    }
}

module.exports = CrudRepository;