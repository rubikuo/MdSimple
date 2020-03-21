import React, {useState} from 'react';

import "./App.scss";
// import './App.css';
import Home from "./components/home/Home";
import TextField from "./components/textfield/TextField";
import Switch from "./components/switch/Switch";
import Checkbox from "./components/checkbox/Checkbox";
import RadioBtn from "./components/radiobtn/RadioBtn";
import Header from "./components/header/Header";
import iphoneImg from "./iphone-frame.png";
const inputTypes = ["filled", "disabled", "error", "counter"];
const components = ["TextField", "Switch", "CheckBox", "RadioButton"]

const App =() => {
  const[currentPage, updateCurrentPage] = useState("home");
  const[inputsValue, updateInputsValue] = useState({filled: "", disabled: "", error: "", counter: ""})
  const[mode, updateMode] = useState("origin");
  const[modeSwitch, updateModeSwitch] = useState(false);
  
  
  /** textfield method */
  const handleInputValue = (e) => {
    console.log(inputsValue);
    console.log(e.target.name)
		if (e.target.name === 'disabled') return;
		updateInputsValue( {...inputsValue, [e.target.name]: e.target.value});
  };

    /** switch method */
    const handleMode = (e) => {
      updateModeSwitch(e.target.checked)
   
      updateMode(mode ==="origin"? "dark": "origin")
    }
  

  return (
    <>     
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <Header currentPage={currentPage} updateCurrentPage={updateCurrentPage} mode={mode} updateMode={updateMode}/>
      <form className="app__componentCtn"> 
      {currentPage ==="home" && <Home components={components} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>}
      {currentPage ==="TextField" 
       && inputTypes.map((input)=>{
         return(
          <TextField 
          key={input} 
          inputType={input} 
          inputsValue={inputsValue}  
          handleInputValue={handleInputValue}
          />
         )
       })} 
       {currentPage ==="Switch" 
       && <Switch
          modeSwitch={modeSwitch}
          handleMode={handleMode}
          />}
       {currentPage ==="Check Box" 
       && <Checkbox />}
       {currentPage ==="Radio Button" 
       && <RadioBtn />}
       </form>
       </div>
    </div>
   </>
  );
}

export default App;
