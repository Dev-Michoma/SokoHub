import Layout from "@/components/Layout";
import {useState} from 'react'
import axios from 'axios';
export default function Categories(){
    const [name ,setName] = useState('');
    async  function saveCategory(ev){
        ev.preventDefault();
    await axios.post('/api/categories' , {name})
    setName('');
     }


    return (
        <Layout>
        <h1>Categories</h1>
        <label>New Category Name</label>
          <form onSubmit={saveCategory} className="flex gap-1">
          < input type="text" className="mb-0"  onChange= {ev => setName(ev.target.value)}
          value ={name} placeholder={'Category name'}/>
            <button type={'submit'} className="btn-primary">Save</button>
          </form>
        </Layout>
    )
}