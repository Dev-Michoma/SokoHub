import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

export default function NewProduct(){
    const router = useRouter();
    const [title ,setTitle] = useState('');
    const [description ,setDescription ] =useState('');
    const [price ,setPrice] = useState('');
    const [goToProducts , setGoToProducts] = useState(false);

   async  function createProduct(ev){
       ev.preventDefault();
        const data ={title ,description ,price};
        await axios.post('/api/products' , data);
        setGoToProducts(true);
    }
    if (goToProducts){
        router.push('/products'); 
    }

    return(
       
        <Layout>
            <form onSubmit={createProduct}>
            <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
            <label>Description</label>
            <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
            <label>Price in (in USD)</label>
            <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>

            <button className="btn-primary">Save</button>
            </form>
            
        </Layout>
    )
}