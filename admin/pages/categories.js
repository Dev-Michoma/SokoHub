import Layout from "@/components/Layout";
import {useEffect, useState} from 'react'
import axios from 'axios';
import { withSwal } from 'react-sweetalert2';


function Categories({swal}) {
  const [editedCategory ,setEditedCategory] = useState(null);
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
      
      const data = {name ,parentCategory}
      if(editedCategory){
          data._id  = editCategory._id
          //These is the code that updates the code of the categories


          //_id is added or overridden with the _id value of the editedCategory. 
          //This suggests that you're updating an existing category,
          // and the _id is used to specify which category to update in the database.
         // data could be the new data for the category, such as its name or description.
         // editedCategory._id ensures that 
        //  you're updating the specific category that was edited (referenced by its unique ID).
       await axios.put('/api/categories' , {...data , _id:editedCategory._id});
          setEditedCategory(null);
      } else {
          await axios.post('/api/categories' , data)
      }
  
      // await axios.put('/api/categories' ,{name ,parentCategory});
      // await axios.post('/api/categories' , {name ,parentCategory});
      

      setName('');
      fetchCategories();
      
   }


    function editCategory(category){
               setEditedCategory(category);
               setName(category.name)
               setParentCategory(category.parent?._id);
    }

      function deleteCategory(category){
        swal.fire({
          title: 'Are you sure',
          text: `'Do you Real want to Delete ${category.name}'`,
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText : 'Yes ,delete!',
          confirmButtonColor: '#d55',
          reverseButtons: true,
      }).then(async result => {

        if(result.isConfirmed){
          const {_id} = category;
         await axios.delete('/api/categories?_id=' + _id);
         fetchCategories();
        }
          // console.log({result});
      }).catch(error => {
          // when promise rejected...
      });
      }

  return (
      <Layout>
      <h1>Categories</h1>
      <label>{ editedCategory ?  `Edit category ${editedCategory.name}`: 'Create New Category'}</label>
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
                      <td>{category?.parent?.name}</td>
                      <td> 
                          <button    onClick={()=> editCategory(category)} className="btn-primary mr-1">Edit</button>

                          <button className="btn-primary mr-1"
                          onClick={() => deleteCategory(category)}
                          
                          >
                            Delete</button>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </Layout>
  )
}


export default  withSwal(({swal} ,ref) =>(
           <Categories swal={swal}/>
))
 
   