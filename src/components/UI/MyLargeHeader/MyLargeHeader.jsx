import React from 'react';
import styles from './MyLargeHeader.module.css'


const MyLargeHeading = (props) => {
    return (
        <div>
            <h2 className={styles.large_header}>{props.text}</h2>
        </div>
    );
};

export default MyLargeHeading;