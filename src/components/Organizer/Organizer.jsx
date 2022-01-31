import axios from 'axios';
import React, { useState, useContext } from 'react';
import CategoryArea from '../CategoryArea/CategoryArea';
import TabArea from '../TabArea/TabArea';
import styles from './Organizer.module.css';
import {Context} from "../../Context.js"
import MyModal from '../UI/MyModal/MyModal';
import NewItemButton from '../UI/NewItemButton/NewItemButton';
import NewItem from '../Forms/Item/NewItem';
import { Box } from '@mui/material';
const BASE_URL = process.env.REACT_APP_BASE_URL + "/category";

const Organizer = (props) => {
  const [page] = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("")
  const [modal, setModal] = useState(false)
  const [option, setOption] = useState("");
  

  React.useEffect(() => {
    let sourceURL = BASE_URL + "?section=" + page;
    axios.get(sourceURL).then((response) => {
      setCategories([]);
      (Array.isArray(response.data)) ? setCategories(response.data) : setStatus(response.data)
        
    })
},[page]);



const callModal = (caller, category_id ) => {
  
  setOption({type:caller, category_id: category_id})
 
  setModal(true)

  
 }

const exitModal = () => { setOption("")}


    return (
        <Box className={styles.organizer}>
        <MyModal 
          visible={modal}      
          setVisible={setModal} 
          clearModal={exitModal}   
        >
          <NewItem
              choice={option.type}
              category_id={option.category_id}
            />
          </MyModal>
           
         
          <TabArea
            showModal={callModal}
          />
          { categories.length === 0 
            ? 
              <h3>{status}</h3>
            :
              categories.map(category => 
              <CategoryArea
                key={category.id}
                title={category.title}
                id={category.id}
                showModal={callModal}
              ><NewItemButton option="item" category_id={category.id} callModal={callModal}/></CategoryArea>
              
         
              ) }
              <NewItemButton option="category" callModal={callModal}/>
              
       
        </Box>
    );
};


export default Organizer;