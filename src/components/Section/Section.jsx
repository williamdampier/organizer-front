import React, {useContext} from 'react';
import styles from './Section.module.css';
import MyLargeHeading from '../UI/MyLargeHeader/MyLargeHeader';
import { Context } from "../../Context.js";

const Section = (props) => { 
    const [page, setPage] = useContext(Context);

    return (
        
        <div className={styles.section} onClick={() => setPage(props.id)}>
            <div className={styles.square}>
                <MyLargeHeading
                    text={props.title}
                />
            </div>
            <div className={styles.align}>
                <div className={styles.triangle_topleft}></div>
                <div className={styles.triangle_topright}></div>
            </div>
        </div>
    );
};


export default Section;