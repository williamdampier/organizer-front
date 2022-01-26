import React, { useEffect, useState } from 'react';
import NewItem from '../../Forms/Item/NewItem';
import styles from './MyModal.module.css'

const MyModal = ({choice, visible, setVisible, clearModal, category_id}) =>{
    const rootClass = [styles.MyModal];
    const [option, setOption] = useState("")


    useEffect(() => {
        setOption(choice)
    },[choice])
    if (visible) {rootClass.push(styles.active)}
    
    
   
    return (
        <div className={rootClass.join(' ')} onClick={() => {clearModal(); setVisible(false) }}>
            <div className={styles.MyModalContent} onClick={(e) => e.stopPropagation() }>
            <NewItem
              choice={option}
              category={category_id}
            />
            </div>
           
        </div>
        
    )
}

export default MyModal;