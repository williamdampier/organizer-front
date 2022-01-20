import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const sections = []

const getSections = () => axios.get(BASE_URL + "/section").then((response) => {
    Object.keys(response.data).map((section)=>{
        sections.push(section);
      
      });
    return sections;
})

export default getSections;