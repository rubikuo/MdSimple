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

const inputs = ["filled", "disabled", "multiline", "textArea", "counter", "test"];
const components = ["TextField", "Switch", "CheckBox", "RadioButton"]

const App =() =>{
  const[currentPage, updateCurrentPage] = useState("home");


  return (
    <>     
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <Header currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
      <div className="app__ctn__componentCtn">
      {currentPage ==="home" && <Home  components={components} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>}
      {currentPage ==="TextField" && inputs.map((input)=>{
         return(
          <TextField key={input} inputType={input} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
         )
       })} 
       {currentPage ==="Switch" && <Switch />}
       {currentPage ==="Check Box" && <Checkbox />}
       {currentPage ==="Radio Button" && <RadioBtn />}
       </div>
       </div>
    </div>
   </>
  );
}

export default App;
