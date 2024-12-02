import Layout from "@/components/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Products(){
 return(    <Layout>

        <Link className="bg-blue-900 text-white py-1 px-2" href={'/products/new'}>Add a new Product</Link>
     
     </Layout>)
}