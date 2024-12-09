import mongoose, { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent: {type:mongoose.Types.ObjectId ,ref:'Category'},
});
const Category = mongoose.models.Category || model('Category', CategorySchema);
export { Category };
