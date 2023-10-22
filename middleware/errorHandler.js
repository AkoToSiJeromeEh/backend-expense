// must handle error for all status codes
const {constants} = require('../constants')

const errorHandler = (err, req, res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Failed",msg: err.message, stackTrace: err.stack})
            break;
        
        case constants.NOT_FOUND:
            res.json({title: "Not Found",msg: err.message, stackTrace: err.stack})
            break;

        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized",msg: err.message, stackTrace: err.stack})
            break;

        case constants.FORBIDDEN:
            res.json({title: "Forbidden",msg: err.message, stackTrace: err.stack})
            break;

        case constants.SERVER_ERROR:
            res.json({title: "Server Error",msg: err.message, stackTrace: err.stack})
            break;

        default:
            console.log('No error')
            break;
    }
 
   
}

module.exports = errorHandler;