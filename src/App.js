import {useState} from 'react';
import './assets/App.css';
import Breeds from './components/breeds';
import Home from './components/home';
import React from "react";

function App() {
  const[buttons, setButtons]=useState(false)

  function showButtons(){
    setButtons(true)
   
  }


  return (
    <div className="App"> 
      <Home showButtons={showButtons} />
      {buttons?<Breeds breeds={['papillon', 'pekinese']}/> : <p></p> }
    </div>
  );
}

export default App;
