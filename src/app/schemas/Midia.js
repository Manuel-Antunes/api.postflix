import mongoose, { mongo } from 'mongoose';

const Midia = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
});