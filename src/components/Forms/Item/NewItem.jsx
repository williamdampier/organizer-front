import React from 'react';
import styles from "./NewItem.module.css"

const NewItem = () => {
    return (
        <div className={styles.main_form}>
            
            
            <input type="radio" id="section_option" name="item_option" value="HTML"/>
            <label for="section_option">Section</label>

            <input type="radio" id="category_option" name="item_option" value="CSS"/>
            <label for="category_option">Category</label>

            <input type="radio" id="item_option" name="item_option" value="JavaScript"/>
            <label for="Item">Item</label>

            {/* Item >>> Category >>> Section */}

            <form action="submit">    
                <h3>Title: </h3>
                <input/>
                <div name="Category options">
                <h3>Section: </h3>
                <label for="sections">Choose a section:</label>
                    <select name="cars" id="cars">
                        <optgroup label="Sections">
                            <option value="Section 52">Section 52</option>
                            <option value="Section 53">Section 53</option>
                        </optgroup>
                    </select>
                </div>

                <div name="Item options">
                <h3>Category: </h3>
                <label for="categories">Choose a section:</label>
                    <select name="categories" id="categories">
                        <optgroup label="Category: ">
                            <option value="Category 2">Category 2</option>
                            <option value="No Category" disabled>No Category</option>
                        </optgroup>
                    </select>
                </div>
                
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default NewItem;