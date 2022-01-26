import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import {Context} from "../../../Context.js"
import styles from "./NewItem.module.css"


const BASE_URL = process.env.REACT_APP_BASE_URL;

const NewItem = ({choice}) => {
    const [option, setOption] = useState("");
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState([]);
    const [page] = useContext(Context);
 
   useEffect(() => {
        setOption(choice)
        axios.get(BASE_URL + "/section").then((response) => {
            setSections(response.data)
        })
        axios.get(BASE_URL + `/category?section=${page}`).then((response) => {
            setCategories(response.data)
        })    

    },[choice])
   
   

    function createElement() {

        // axios.post(BASE_URL + "/" + option, item)
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

            <form action="submit">    
                <h3>Title: </h3>
                <input/>
                <div 
                    name="Category options" 
                    style={{display: option === "category" ? 'block' : 'none'} }
                    >

                <h3>Section: </h3>
                <label htmlFor="sections">Choose a section:</label>
                    <select name="sections" id="sections">
                        <optgroup label="Sections">
                            {sections.map(item => <option key={item.id} value={item.title}>{item.title}</option>)}
                        </optgroup>
                    </select>
                </div>

                <div name="Item options" style={{display: option === "item" ? 'block' : 'none'} }>
                <h3>Category: </h3>
                <label htmlFor="categories">Choose a section:</label>
                    <select name="categories" id="categories">
                        <optgroup label="Category: ">
                                 {categories.map(item => <option key={item.id} value={item.title}>{item.title}</option>)}
                        </optgroup>
                    </select>
                </div>
                
                
                <input type="submit" onClick={() => createElement}/>
            </form>
            
        </div>
    );
};

export default NewItem;