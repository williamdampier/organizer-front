import React, { useState } from 'react';
import Item from "../Item/Item"

import styles from "./CategoryArea.module.css"
import axios from 'axios';
import NewItemButton from '../UI/NewItemButton/NewItemButton';



let BASE_URL = process.env.REACT_APP_BASE_URL + "/item?category=";

const CategoryArea = ({title, id, showModal }) => {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("")
    
    React.useEffect(() => {
    
        let sourceURL = BASE_URL + id;
        axios.get(sourceURL).then((response) => {
          setItems([]);
          (Array.isArray(response.data)) ? setItems(response.data) : setStatus(response.data)
            
        })
    },[id]);
    
    const callModal = (caller) => {
     showModal(caller)
    }

    return (
        <div className={styles.section}>
          
            <div className={styles.header}>{title}</div>
            { items.length === 0 
            ? 
              <h3 style={{"align-self": "center"}}>{status}</h3>
            :
            items.map((item) => {
                return <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                />
            })
          }
          <NewItemButton option="item" callModal={callModal}/>
            
            
        </div>
    );
};

export default CategoryArea;