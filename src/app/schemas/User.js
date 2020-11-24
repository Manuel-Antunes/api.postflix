import mongoose, { mongo } from 'mongoose';

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("User", UserSchema);