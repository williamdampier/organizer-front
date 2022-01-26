import axios from 'axios';
import React, { useState, useContext } from 'react';
import CategoryArea from '../CategoryArea/CategoryArea';
import TabArea from '../TabArea/TabArea';
import styles from './Organizer.module.css';
import {Context} from "../../Context.js"
import MyModal from '../UI/MyModal/MyModal';
import NewItemButton from '../UI/NewItemButton/NewItemButton';
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

const showModal = (itemChoice) => {
 console.log(itemChoice);
  setOption(itemChoice)
  setModal(true)
  
}  

const callModal = (caller) => {
  showModal(caller)
 }

const exitModal = () => { setOption("")}


    return (
        <div className={styles.organizer}>
        <MyModal 
          visible={modal}
          choice={option}
          setVisible={setModal} 
          clearModal={exitModal}
          
          />
           
         
          <TabArea
            showModal={showModal}
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
                showModal={showModal}
              />)
          }
          <NewItemButton option="category" callModal={callModal}/>
          
       
        </div>
    );
};


export default Organizer;