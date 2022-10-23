const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
    content: {
        type: Schema.Types.String,
        minLenght: 2,
    }
});

const model = mongoose.model('comments', generalSchema);
module.exports = model;