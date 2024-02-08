const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');


const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_backend'
}

const passportAuth = (passport) => {
    console.log('Initializing passport strategy...');
    passport.use(new JwtStrategy(opts, async (payload, done) => {
            const user = await User.findById(payload.id);
            if (user) {
                console.log('Authenticated user:', user);
                return done(null, user);
            } else {
                console.log('User not found');
                return done(null, false);
            }
    }))
}

module.exports = passportAuth;