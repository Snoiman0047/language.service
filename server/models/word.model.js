const { Timestamp } = require('mongodb');
var mongoose = require('mongoose');

var wordModel = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Words', wordModel);