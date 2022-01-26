import React, {useState} from 'react';
import styles from './NewItemButton.module.css'

const NewItemButton = ({callModal, option, category_id}) => {
    const [caller, setCaller] = useState(option)
    return (
        <div className={styles.newButton} onClick={() => (category_id) ? callModal(caller,  category_id) : callModal(caller)}>
            +
        </div>
    );
};

export default NewItemButton;