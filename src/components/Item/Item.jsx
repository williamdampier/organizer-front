import { Card, CardContent, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteButton from '../UI/DeleteButton/DeleteButton';
import styles from "./Item.module.css"


const Item = ({id, title, description, link}) => {

    

    return (

        <Card sx={{'margin': '10px 5px'}}>
            <CardContent>
                <Box sx={{'display': 'flex', 'flex-direction': 'row'}}>
                    <Typography>
                    {title}            
                    </Typography>
                <DeleteButton option="item" item_id={id} />
                </Box>
                <Box sx={{'display': 'flex', 'flex-direction': 'column', 'margin-top': '10px'}}>
                    <Typography>{description? description : 'no description'}</Typography>
                    {link ? <Link href={'//' + link} target="_blank" rel="noopener noreferrer">Link</Link> : <Typography>no link</Typography>}
                </Box>
            </CardContent>
        </Card>
        
    );
};


export default Item;