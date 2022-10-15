const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Rwitz6:Q1QehrxLjXzhRibS@cluster0.zvtir7v.mongodb.net/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;