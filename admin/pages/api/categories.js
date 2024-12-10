import { Category } from "./models/Category";
import { mongooseConnect } from "@/lib/mongoose";
export default async function handle(req ,res) {
    const {method} = req;

    await mongooseConnect();
    if (method === 'POST'){
         const {name ,parentCategory} = req.body;
         const categoryDoc = await  Category.create({name ,parent:parentCategory})
         res.json(categoryDoc)
    }
   
    if (method == 'PUT'){
    const {name ,parentCategory ,_id} = req.body;
     {
      await  Category.updateOne({_id} ,{name ,parent:parentCategory || null})
      res.json(true);
     }
        }

     if (method === 'DELETE'){
        const {_id} = req.query;
         await   Category.deleteOne({_id});
         res.json('everything its ok it deleted')
     }
   
    if (method === 'GET') {
        res.json (await Category.find().populate('parent'));
    }
   
}