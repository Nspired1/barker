const jwt = require('jsonwebtoken');

//user authentication
exports.loginRequired = function(req, res, next){
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, function(error, decodedPayload){
            if(decodedPayload){
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Something went wrong. Please login."
                });
            }
        });
    } catch(error){
        return next({
            status: 401,
            message: "Something went wrong. Please login."
        });
    }
    

};

//user authorization
exports.checkCorrectUser = function(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(error, decodedPayload){
            if(decodedPayload && decodedPayload.id === req.params.id){
                return next();
            } else {
                return next({
                    status: 401,
                    message: "You are not authorized to do that."
                })
            }
        })
    } catch(error){
        return next({
            status: 401,
            message: "You are not authorized to do that."
        })
    }
};