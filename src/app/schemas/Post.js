import mongoose, { mongo } from 'mongoose';

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true

    },

    foto: {
        type: Number,
        required: false
    },

    post: {
        type: String,
        required: true

    },

}, {
    timestamps: true
});

export default mongoose.model("Post", PostSchema);