import Layout from "@/components/Layout";
import {useEffect, useState} from 'react'
import axios from 'axios';
export default function Categories(){
    const [name ,setName] = useState('');
    const [categories ,setCategories] = useState('');


    useEffect(()=> {
        axios.get('/api/categories').then(result => {
          setCategories(result.data);
        })
    },[]);

     useEffect(() => {
        fetchCategories();

     } ,[])


     function fetchCategories(){
        axios.get('/api/categories').then(result =>{
            setCategories(result.data);
        })
     }

    async  function saveCategory(ev){
        ev.preventDefault();
        await axios.post('/api/categories' , {name})
        setName('');
        fetchCategories();
     }


    return (
        <Layout>
        <h1>Categories</h1>
        <label>New Category Name</label>
          <form onSubmit={saveCategory} className="flex gap-1">
          < input type="text" className="mb-0"  onChange= {ev => setName(ev.target.value)}
          value ={name} placeholder={'Category name'}
        
          />
          <select>
            <option value="0"> No parent Category</option>
            {categories.length > 0 && categories.map(
                    category => (
                       <option value={category._id}>{category.name}</option>
                    )
                )}
          </select>
            <button type={'submit'} className="btn-primary">Save</button>
          </form>


          <table className="basic mt-4">
            <tr>
                <td>Category name</td>
            </tr>
            <tbody>
             
            </tbody>
          </table>
        </Layout>
    )
}