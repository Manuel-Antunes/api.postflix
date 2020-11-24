import mongoose, { mongo } from 'mongoose';

const MidiaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
MidiaSchema.virtual("url").get(() => {
    return `http://localhost:3333/files/${this.path}`;
});
export default mongoose.model("Midia", MidiaSchema);