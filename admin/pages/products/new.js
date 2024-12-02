import Layout from "@/components/Layout";



export default function NewProduct(){
    return(
        <Layout>
        
            {/* <label>Product Name</label> */}
            <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
            <label>New Product</label>
            <input type="text" placeholder="product name"/>
            <label>Description</label>
            <textarea placeholder="description"></textarea>
            <label>Price in (in USD)</label>
            <input type="text" placeholder="price"/>
        </Layout>
    )
}