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
  const[currentPage, setCurrentPage] = useState("home");
  const[inputsValue, setInputsValue] = useState({filled: "", disabled: "", error: "", counter: ""})
  const[mode, setMode] = useState("origin");
  const[modeSwitch, setModeSwitch] = useState(false);
  
  
  /** textfield method */
  const handleInputValue = (e) => {
    console.log(inputsValue);
    console.log(e.target.name)
		if (e.target.name === 'disabled') return;
		setInputsValue( {...inputsValue, [e.target.name]: e.target.value});
  };

    /** switch method */
    const handleMode = (e) => {
      setModeSwitch(e.target.checked)
   
      setMode(mode ==="origin"? "dark": "origin")
    }
  

  return (
    <>     
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} mode={mode} setMode={setMode}/>
      <form className="app__componentCtn"> 
      {currentPage ==="home" && <Home components={components} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
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
