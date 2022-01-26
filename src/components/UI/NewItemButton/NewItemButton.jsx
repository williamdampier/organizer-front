import React, {useState} from 'react';
import styles from './NewItemButton.module.css'

const NewItemButton = ({callModal, option}) => {
    const [caller, setCaller] = useState(option)
    return (
        <div className={styles.newButton} onClick={() => callModal(caller)}>
            +
        </div>
    );
};

export default NewItemButton;