import React, { useState } from 'react';
import Section from '../Section/Section';
import axios from 'axios';
import styles from './TabArea.module.css'
import NewItemButton from '../UI/NewItemButton/NewItemButton';
import { Tabs } from '@mui/material';

const SECTION_URL = process.env.REACT_APP_BASE_URL + "/section";

const TabArea = ({showModal}) => {
    const [sections, setSections] = useState([]);
  
    

    React.useEffect(() => {
        axios.get(SECTION_URL).then((response) => {
            setSections(response.data)
        })
        

    },[])

    const callModal = (caller) => {
        showModal(caller)
       }
    

    return (
        <div className={styles.TabArea}> 
     
        <NewItemButton option="section" callModal={callModal}/>
        
        <Tabs
             sx={{'display': 'flex', 'justify-content': 'flex-start'}}
            >
            {sections.map((item) => 
                <Section 
                    key={item.id} 
                    label={item.title}
                    id={item.id}
                />
           
               ) }
               </Tabs>
            
            
            </div>
      
        
         
           
           
     
    );
};

export default TabArea;