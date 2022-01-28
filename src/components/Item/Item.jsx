import React from 'react';
import DeleteButton from '../UI/DeleteButton/DeleteButton';
import styles from "./Item.module.css"


const Item = (props) => {

    

    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <h3 style={{"alignSelf": "center"}}>{props.title}</h3>
                <DeleteButton 
                    option="item"
                    item_id={props.id}
                />
            </div>
            
            <img className={styles.icon} src={require('../../images/stationery.png').default} alt='description'/>           
            <p>{props.description}</p>
            <a href={'//' + props.link} target="_blank" rel="noopener noreferrer">Go to website</a>
            
        </div>
    );
};


export default Item;