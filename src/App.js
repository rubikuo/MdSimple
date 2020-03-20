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
const inputTypes = ["filled", "disabled", "error", "counter"];
const components = ["TextField", "Switch", "CheckBox", "RadioButton"]

const App =() =>{
  const[currentPage, updateCurrentPage] = useState("home");
  // const[inputValue, updateInputValue] = useState("");
  const[inputsValue, updateInputsValue]
  = useState({filled: "", disabled: "", error: "", counter: ""})
  
  const handleInputValue = (e) => {
    console.log(inputsValue);
    console.log(e.target.name)
		if (e.target.name === 'disabled') return;
		updateInputsValue( {...inputsValue, [e.target.name]: e.target.value});
	};


  return (
    <>     
      <div className="app"> 
      <img src={iphoneImg} alt="" className="app__img"/>
      <div className="app__ctn">
      <Header currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
      <div className="app__componentCtn"> 
      {currentPage ==="home" && <Home components={components} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>}
      {currentPage ==="TextField" && inputTypes.map((input)=>{
         return(
          <TextField 
          key={input} 
          inputType={input} 
          currentPage={currentPage} 
          updateCurrentPage={updateCurrentPage} 
          inputsValue={inputsValue} 
          updateInputsValue={updateInputsValue} 
          handleInputValue={handleInputValue}/>
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
