// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Good } from "./models/Good";
export default async function handler(req, res) {
     const {method} = req;
  
      await mongooseConnect();

      if (method ==='GET'){
        if (req.query?.id){
            res.json(await Good.findOne({_id:req.query.id}));
        }else {
            res.json(await Good.find());
        }
       
      }
   
    if(method =='POST'){
    const {title ,description ,price} = req.body;

    const productDoc = await Good.create({
        title ,description ,price,
    })
    res.json(productDoc)
    }

if (method == 'PUT'){
    const {title ,description ,price ,_id} = req.body;
    {
      await  Good.updateOne({_id} ,{title ,description ,price})
      res.json(true);
    }
}
  }
  