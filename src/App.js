import React, {useState} from 'react';
import './App.css';
import TextField from "./Components/TextField";
import Switch from "./Components/Switch";
import Checkbox from "./Components/Checkbox"
import RadioBtn from "./Components/RadioBtn";
import MemoHeader from "./Components/Header";
import iphoneImg from "./iphone-frame.png";

const inputs = ["filled", "disabled"];


function App() {
  

  return (
    <>     
    <h1>UI Library</h1>
      <div className="container">
       
      <div className="inputComponent">
       {inputs.map((input)=>{
         return(

          <TextField key={input} classNames={input} />
        
         )
       })}
       </div>

      <img src={iphoneImg} alt="" className="phoneFrame"/>
      
    </div>
   </>
  );
}

export default App;
