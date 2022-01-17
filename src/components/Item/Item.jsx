import React from 'react';
import styles from "./Item.module.css"

const Item = props => {
    return (
        <div className={styles.item}>
            <h3>Item Title</h3>
            <img className={styles.icon} src={require('../../images/stationery.png').default} alt='description'/>           
            <p>Description</p>
            <a href="www.google.com">Item Link</a>
            
        </div>
    );
};


export default Item;