const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    jokeNo: {
        type: Number,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    jokeContent: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Joke', jokeSchema);
