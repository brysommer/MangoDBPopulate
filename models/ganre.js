const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
    genre: {
        type: Schema.Types.String,
        minLenght: 2,
    }
});

const model = mongoose.model('Genre', generalSchema);
module.exports = model;