const mongoose = require('mongoose');

const FormData = mongoose.model(
    "FormData",
    new mongoose.Schema({
        username: String,
        rating: Number,
    }),
    'formdata'
)

module.exports = FormData