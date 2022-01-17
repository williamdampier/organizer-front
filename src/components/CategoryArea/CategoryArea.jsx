import React, {useContext} from 'react';
import Item from "../Item/Item"
import { Context } from "../../Context.js";

import styles from "./CategoryArea.module.css"
const CategoryArea = (props) => {
    
   


    return (
        <div className={styles.section}>
            <div className={styles.header}>Header: {props.title}</div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
};

export default CategoryArea;