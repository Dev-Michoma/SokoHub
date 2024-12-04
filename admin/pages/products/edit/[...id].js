import Layout from "@/components/Layout";
import {useRouter} from "next/router"
import { useEffect ,useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
export default function EditProductPage(){
    const [productInfo ,setProductInfo] = useState(null);
     const router = useRouter();
    //  console.log({router});
    const {id} = router.query;
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response =>{
             setProductInfo(response.data);
        }
                // {console.log(response.data)}
        );
    } ,[id]);

    return(
        <Layout>
            
            {productInfo && (
                <ProductForm {...productInfo}/>
            )}
        </Layout>
    )
}