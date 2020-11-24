import mongoose, { mongo } from 'mongoose';

const MidiaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Midia", MidiaSchema);