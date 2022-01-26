import React from 'react';
import styles from './MyModal.module.css'

const MyModal = ({choice, visible, setVisible, clearModal, children}) =>{
    const rootClass = [styles.MyModal];

    if (visible) {rootClass.push(styles.active)}
    
    
   
    return (
        <div className={rootClass.join(' ')} onClick={() => {clearModal(); setVisible(false) }}>
            <div className={styles.MyModalContent} onClick={(e) => e.stopPropagation() }>
            {children}
            </div>
           
        </div>
        
    )
}

export default MyModal;