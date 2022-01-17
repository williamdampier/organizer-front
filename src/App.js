import React, { useState }  from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Organizer from "./components/Organizer/Organizer";
import './App.css';

import { Context } from "./Context.js";


function App() {
  const [mainPage, setMainPage] = useState(1);

  return (
    <Context.Provider value={[mainPage, setMainPage]}>
    <div>
      <Header/>
      <Organizer/>
      <Footer/>
    </div>
    </Context.Provider>
  );
}

export default App;
