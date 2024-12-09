import {Schema ,model} from "mongoose";

const CategorySchema = new Schema({
    name: {type: String ,required:true}
});

export const Category = model?.Category || model ('Category' ,CategorySchema);