const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
    name: {
        type: Schema.Types.String,
        minLenght: 2,
    },
    comments: {
        type: Schema.Types.Array,
        ref: 'Comment',
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
    },
});

const model = mongoose.model('Storybook', generalSchema);
module.exports = model;