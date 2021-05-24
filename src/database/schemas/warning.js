const mongoose = require('mongoose');

const warningSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    moderatorID: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    warnID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('warns', warningSchema);