import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';




export default function ProductForm({_id ,title:existingTitle ,description:existingDescription,price:existingPrice}){
    
    const router = useRouter();
    const [title ,setTitle] = useState(existingTitle || "" );
    const [description ,setDescription ] =useState(existingDescription || "");
    const [price ,setPrice] = useState(existingPrice);
    const [goToProducts , setGoToProducts] = useState(false);

   async  function saveProduct(ev){
       ev.preventDefault();
       const data ={title ,description ,price};
       if(_id){
        
        await axios.put('/api/products' ,{...data ,_id})
       } else{
      
        await axios.post('/api/products' , data);
        setGoToProducts(true);
       }
      
        setGoToProducts(true);
    }
    if (goToProducts){
        router.push('/products'); 
    }

    return(
       
       
            <form onSubmit={saveProduct}>
            <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
            <label>Description</label>
            <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
            <label>Price in (in USD)</label>
            <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>

            <button className="btn-primary">Save</button>
            </form>
       
    
    )   

}