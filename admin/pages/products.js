import Layout from "@/components/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import axios from "axios";
export default function Products(){

useEffect(() => {
   axios.get('/api/products').then(response => {
      console.log(response.data)
   }
   )
} ,[]);

 return(    <Layout>

        <Link className="bg-blue-900 text-white py-1 px-2" href={'/products/new'}>Add a new Product</Link>
     
     </Layout>)
}