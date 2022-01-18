import React from 'react';
import styles from "./Item.module.css"


const Item = (props) => {
    return (
        <div className={styles.item}>
            <h3>{props.title}</h3>
            <img className={styles.icon} src={require('../../images/stationery.png').default} alt='description'/>           
            <p>{props.description}</p>
            <a href={'//' + props.link} target="_blank" rel="noopener noreferrer">Go to website</a>
            
        </div>
    );
};


export default Item;