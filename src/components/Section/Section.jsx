import React, {useContext} from 'react';
import styles from './Section.module.css';
import { Context } from "../../Context.js";
import DeleteButton from '../UI/DeleteButton/DeleteButton';
import { Tab, Box } from '@mui/material';


const Section = ({id, label}) => { 
    const [page, setPage] = useContext(Context);

    return (
        
        <Box onClick={() => setPage(id)} className={styles.section}>

            <Tab    
            label={<span style={{'color': '#0c0d0d', 'opacity': '1', 'font-weight': '700', 'font-size': '1rem'}}>{label}</span>}
            icon={<DeleteButton option="section" item_id={id} />} 
            iconPosition="end" wrapped/>      
   
        </Box>
    );
};


export default Section;