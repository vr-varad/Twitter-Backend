const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl, {
            dbName: 'TwitterBackend',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


module.exports = connectDB;