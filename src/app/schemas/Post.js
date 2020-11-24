import mongoose, { mongo } from 'mongoose';

const Post = new moongose.Schema({
    titulo: {
        type: String,
        required: true

    },

    foto: {
        type: Number,
        required: true
    },

    post: {
        type: String,
        required: true

    },

})