import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import {Context} from "../../../Context.js"
import styles from "./NewItem.module.css"


const BASE_URL = process.env.REACT_APP_BASE_URL + "/";
console.log(BASE_URL);

const NewItem = ({choice, category_id}) => {
    const [option, setOption] = useState("");
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState([]);
    const [page] = useContext(Context);
    const [newItem, setNewItem] = useState({});
    
   useEffect(() => {
        setOption(choice)
        setNewItem({title: "", section_id: page, category_id: category_id, description: '', link: ''})
        axios.get(BASE_URL + "section").then((response) => {
            setSections(response.data)
        })
        axios.get(BASE_URL + `category?section=${page}`).then((response) => {
            (Array.isArray(response.data)) && setCategories(response.data)
        })    
    },[choice, category_id])

    
   
   function handleTitleInput(e) {
    setNewItem({...newItem, title: e.target.value})
    
   }

   function handleSectionInput(e) {
    setNewItem({...newItem, section_id: e.target.value})
   }


   function handleCategoryInput(e) {
    setNewItem({...newItem, category_id: e.target.value})
 
   }

   function handleLinkInput(e) {
    setNewItem({...newItem, link: e.target.value})
   }


   function handleDescriptionInput(e) {
    setNewItem({...newItem, description: e.target.value})
   }
   

    function createElement(e) {
        
        if (option === "section") {
            axios.post(BASE_URL + option, {title: newItem.title})
            .then((response) => console.log(response))
            .catch(function (error) {
                console.log(error);
              })
        }

        if (option === "category") {
            axios.post(BASE_URL + option, {
                title: newItem.title, 
                section_id: newItem.section_id})
                .then((response) => console.log(response))
                .catch(function (error) {
                    console.log(error);
                  })
            }

        if (option === "item") {
            axios.post(BASE_URL + option, {
                title: newItem.title, 
                category_id: newItem.category_id,
                description: newItem.description,
                link: newItem.link
            })
                .then((response) => console.log(response))
                .catch(function (error) {
                    console.log(error);
                  })
            }
      
    }

    return (
        <div className={styles.main_form}>
            
            
            <input 
                type="radio" 
                id="section_option" 
                value="section"   
                checked={option === "section"}    
                onChange={()=>setOption("section")}       
            />        
            <label htmlFor="section_option">Section</label>

            <input 
                type="radio" 
                id="category_option" 
                value="category"   
                checked={option === "category"}  
                onChange={()=>setOption("category")}                                        
            />
            <label htmlFor="category_option">Category</label>

            <input 
                type="radio" 
                id="item_option" 
                value="item" 
                checked={option === "item"}  
                onChange={()=>setOption("item")}       
            />
            <label htmlFor="Item">Item</label>

            {/* Item >>> Category >>> Section */}

            <form onSubmit={createElement}>    
                <h3>Title: </h3>
                <input onChange={handleTitleInput}/>
                <div 
                    name="Category options" 
                    style={{display: option === "category" ? 'block' : 'none'} }
                    >

                <h3>Section: </h3>
                <label htmlFor="sections">Choose a section:</label>
                    <select name="sections" id="sections" onChange={handleSectionInput}>
                        <optgroup label="Sections" >
                            {sections.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                        </optgroup>
                      
                    </select>
                </div>

                <div name="Item options" style={{display: option === "item" ? 'block' : 'none'} }>
                <h3>Category: </h3>
                <label htmlFor="categories">Choose a section:</label>
                    <select name="categories" id="categories" onChange={handleCategoryInput}>
                        <optgroup label="Category: ">
                                 {categories.length !== 0 && categories.map(item => <option key={item.id} value={item.id} >{item.title}</option>)}
                        </optgroup>
                    </select>
                    <h4>Link:</h4>
                <input onChange={handleDescriptionInput}/>
                    <h4>Link:</h4>
                <input onChange={handleLinkInput}/>
                </div>
                
               
                <input type="submit"/>
            </form>
            
        </div>
    );
};

export default NewItem;