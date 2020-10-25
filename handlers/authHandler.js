const db = require("../models/dbLink");
const jwt = require("jsonwebtoken");

exports.signin = function(){
}

exports.signup = async function(req, res, next){
    try {
        let user = await db.User.create(req.body);
        let {id, username, profileImageUrl} = user;
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
    } catch(error){
        //Mongoose code 11000 is for failed validation
        //11000 error messages are messy, so custom msg
        if(error.code === 11000){
            error.message = "Sorry, that email is taken."
        }
        return next({
            status: 400,
            message: error.message
        })
    };
};