class DivisionByZeroError extends Error {

    constructor(message){
        super(message);
        this.name = message;
    }
}

module.exports = {DivisionByZeroError};