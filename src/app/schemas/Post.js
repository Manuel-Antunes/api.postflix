import mongoose, { mongo, Schema } from 'mongoose';

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true

    },

    foto: {
        type: Schema.Types.ObjectId,
        ref: "Midia"
    },
    post: {
        type: String,
        required: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

export default mongoose.model("Post", PostSchema);