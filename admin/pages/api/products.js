// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Good } from "./models/Good";
export default async function handler(req, res) {
     const {method} = req;
  
      await mongooseConnect();
   
    if(method =='POST'){
    const {title ,description ,price} = req.body;

    const productDoc = await Good.create({
        title ,description ,price,
    })
    res.json(productDoc)
    }
  }
  