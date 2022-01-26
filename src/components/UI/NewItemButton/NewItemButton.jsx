import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import styles from './NewItemButton.module.css'

const NewItemButton = ({callModal, option, category_id}) => {
    const [caller, setCaller] = useState("option")
    const  [category, setCategory] = useState(null)

    useEffect(() => {
        setCaller(option)
        if (category_id) { setCategory(category_id)}
    })


    function callNewItem() {
        
        callModal(caller, category)
    }
    
    return (
        <div className={styles.newButton} onClick={() => callNewItem()}>
            +
        </div>
    );
};

export default NewItemButton;