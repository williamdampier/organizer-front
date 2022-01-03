import React from 'react';
import TabArea from '../TabArea/TabArea';

import styles from './Organizer.module.css';

const Organizer = (props) => {
    return (
        <div className={styles.organizer}>
          <TabArea/>
        </div>
    );
};


export default Organizer;