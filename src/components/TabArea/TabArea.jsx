import React, { useState } from 'react';
import Section from '../Section/Section';
import axios from 'axios';
import styles from './TabArea.module.css'

const SECTION_URL = process.env.REACT_APP_BASE_URL + "/section";

const TabArea = (props) => {
    const [sections, setSections] = useState([]);
    

    React.useEffect(() => {
        axios.get(SECTION_URL).then((response) => {
            setSections(response.data)
        })


    },[])

    

    return (
        <div className={styles.TabArea}>
     
          {sections.map((item) => 
            <Section 
                key={item.id} 
                title={item.title}
                id={item.id}
                />) }
        </div>
    );
};

export default TabArea;