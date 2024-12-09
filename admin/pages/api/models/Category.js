import mongoose, { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: { type: String, required: true },
});
const Category = mongoose.models.Category || model('Category', CategorySchema);
export { Category };
