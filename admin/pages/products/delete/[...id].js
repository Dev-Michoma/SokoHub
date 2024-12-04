import {useRouter} from "next/router"
import Layout from "@/components/Layout";

export default function DeleteProductPage(){
    const router = useRouter();
    function goBack(){
        router.push('/products')
    }
    return(
        <Layout>
            Do you want to delete
            <button>Yes</button>
            <button onClick={goBack}> NO</button>
        </Layout>
    )
}