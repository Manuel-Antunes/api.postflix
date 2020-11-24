import mongoose, { mongo } from 'mongoose';

const User = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAuctor: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});