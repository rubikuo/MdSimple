import React, {useState} from 'react';

import "./App.scss";
// import './App.css';
import Home from "./Components/Home";
import TextField from "./Components/TextField";
import Switch from "./Components/Switch";
import Checkbox from "./Components/Checkbox"
import RadioBtn from "./Components/RadioBtn";
import Header from "./Components/Header";
import iphoneImg from "./iphone-frame.png";

const inputs = ["filled", "disabled", "multiline"];
const components = ["TextField", "Switch", "CheckBox", "RadioButton"]

const App =() =>{
  const[currentPage, updateCurrentPage] = useState("TextField");


  return (
    <>     
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <Header currentPage={currentPage}/>
      {currentPage ==="home" && <Home  components={components}/>}
      {currentPage ==="TextField" && inputs.map((input)=>{
         return(
          <TextField key={input} inputType={input} />
         )
       })} 
       {currentPage ==="SWITCH" && <Switch />}
       {currentPage ==="CHECK BOX" && <Checkbox />}
       {currentPage ==="RADIO BUTTON" && <RadioBtn />}
       </div>
    </div>
   </>
  );
}

export default App;
