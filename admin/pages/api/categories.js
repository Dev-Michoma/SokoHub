import { Category } from "./models/Category";

export default async function handle(req ,res) {
    const method = req.method;

    if (method === 'POST'){
         const {name} = req.body;
         const categoryDoc = await  Category.create({name})
         res.json(categoryDoc);
    }
}