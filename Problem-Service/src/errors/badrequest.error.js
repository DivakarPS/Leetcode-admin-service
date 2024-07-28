const BaseError = require('./base.error');

const { StatusCodes } = require('http-status-codes');

class BadRequestError extends BaseError {
    constructor(propertyName, details) {
        super("Bad Request", StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} is provided`, details);
    }
}

module.exports = BadRequestError;