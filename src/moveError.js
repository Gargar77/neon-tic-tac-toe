
class MoveError extends Error {
    constructor(message) {
        super(message);
        this.name = "MoveError";
    }
}

module.exports = MoveError;

