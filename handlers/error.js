//middleware function used after 404 hanlder that responses with 
//status of error or custom errors or 500 (something wrong on server);

function errorHandler(error, req, res, next){
    return res.status(error.status || 500).json({
        error: {
            message: error.message || "Whoops! looks like something went wrong."
        }
    });
}

module.exports = errorHandler;