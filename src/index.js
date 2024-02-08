const express = require('express');
const connectDB = require('./config/database');
const bodyParser = require('body-parser'); 
const passport = require('passport')

const router = require('./routes/index')
const passportAuth = require('./middlewares/jwtMiddleware.js')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(passport.initialize())
passportAuth(passport)

app.use('/api/v1',router)




const start = async () => {
    try {
        await connectDB();
        app.listen(3000, async() => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log('Error connecting to the server: ', error);
    }
}

start();