import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';




export default function ProductForm({_id ,title:existingTitle ,description:existingDescription,price:existingPrice,images}){
    
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


   async  function uploadImages(ev){ 
        // console.log(ev)
        const files = ev.target?.files;
        if (files?.length > 0){
            const data = new FormData();
            for  (const file of files ){
                data.append('file' ,file)
            }
            // files.forEach(file => data.append('file' ,file));
            // const res = await axios.post('/api/upload' , data);
            const res = await fetch('/api/upload' ,{
                method: 'POST',
                body:data,
            })
         console.log(res);
        }

    }
    return(
       
       
            <form onSubmit={saveProduct}>
            <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
            <label>Photos</label>
            <div className="mb-2 ">
                <label className="w-32 h-32 border text-center flex justify-center items-center
                text-sm gap-1 text-gray-500 rounded-lg bg-gray-200" >
               
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                 </svg>
                   <div> Upload</div>
               <input type="file" className="hidden" onChange={uploadImages}/>

                </label >
                {!images?.length &&(<div>No photos in this product</div>)}</div>
            <label>Description</label>
            <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
            <label>Price in (in USD)</label>
            <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>

            <button className="btn-primary">Save</button>
            </form>
       
    
    )   

}