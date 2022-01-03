import React from 'react';
import Section from '../Section/Section';
import styles from './TabArea.module.css'

const TabArea = (props) => {
    return (
        <div className={styles.TabArea} >
           <Section/>
           <Section/>
           <Section/>
        </div>
    );
};

export default TabArea;