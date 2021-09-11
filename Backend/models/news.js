const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
})

const news = mongoose.model('news', newsSchema);
module.exports = news;