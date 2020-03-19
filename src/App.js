import React, {useState} from 'react';

import "./App.scss";
// import './App.css';
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
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <MemoHeader />
       {inputs.map((input)=>{
         return(

          <TextField key={input} classNames={input} />
        
         )
       })}
       </div>

      {/* <div className="app_frameCtn"> */}
      
      {/* </div> */}
    </div>
   </>
  );
}

export default App;
