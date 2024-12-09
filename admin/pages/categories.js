import Layout from "@/components/Layout";
import {useEffect, useState} from 'react'
import axios from 'axios';
export default function Categories(){
    const [name ,setName] = useState('');
    const [parentCategory ,setParentCategory] = useState('');
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
        await axios.post('/api/categories' , {name ,parentCategory})
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
          <select 
            onChange ={ev => setParentCategory(ev.target.value)}
            value={parentCategory}
          >
            <option value=""> No parent Category</option>
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
                <td>Category Parent</td>
            </tr>
            <tbody>
            {categories.length > 0 && categories.map(
                    category => (
                      <tr>
                        <td>{category.name}</td>
                        <td>{category.parent}</td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </Layout>
    )
}