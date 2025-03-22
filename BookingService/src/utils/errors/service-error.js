const {StatusCodes} = require('http-status-codes');

class ServiceError extends Error {
    constructor(message = 'Something went wrong', explanation = 'Something wrong at service layer', statuscode = StatusCodes.INTERNAL_SERVER_ERROR) {
        super();
        this.name = 'ServiceError';
        this.message = message,
        this.explanation = explanation,
        this.statuscode = statuscode
    }
}

module.exports = ServiceError