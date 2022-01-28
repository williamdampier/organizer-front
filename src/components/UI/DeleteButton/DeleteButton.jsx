import axios from 'axios';
import React from 'react';
import styles from "./DeleteButton.module.css"
import icon from "./delete.png"

const BASE_URL = process.env.REACT_APP_BASE_URL + "/";

const DeleteButton = ({option, item_id}) => {

  // window.location.reload();

    function deleteItem() {
        const path = BASE_URL + option + "/" + item_id
        axios.delete(path)
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
            window.location.reload();
    }

    return (
        <div className={styles.button} onClick={deleteItem}>
            <img className={styles.icon} src={icon}/>
        </div>
    );
};



export default DeleteButton;