import React from 'react';
import styles from './Section.module.css';
import MyLargeHeading from '../UI/MyLargeHeader/MyLargeHeader';



const Section = (props) => {
    return (
        <div className={styles.section}>
            <div class={styles.square}>
                <MyLargeHeading
                    text='Test Header'
                />
            </div>
            <div class={styles.align}>
                <div class={styles.triangle_topleft}></div>
                <div class={styles.triangle_topright}></div>
            </div>
        </div>
    );
};


export default Section;