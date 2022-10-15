const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Rwitz6:Q1QehrxLjXzhRibS@cluster0.zvtir7v.mongodb.net/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;