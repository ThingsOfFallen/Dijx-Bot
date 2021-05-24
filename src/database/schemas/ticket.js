const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    channelID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tickets', ticketSchema);