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
const components = ["TextField", "Switch", "CheckBox", "RadioButton"]

const App =() => {
  const[currentPage, setCurrentPage] = useState("home");
  const[mode, setMode] = useState("origin");
  const[modeSwitch, setModeSwitch] = useState(false);
  const[errorMsg, setErrorMsg]= useState("")
  const[blur, setBlur]=useState(true)
  const[focus, setFocus]=useState(false)
  
  
  /** textfield method */
  const [ inputValue, setInputValue ] = useState('');
	const handleInputValue = (e) => {
    setInputValue(e.target.value);
    
	};


  const onSubmit = (e) => {
     e.preventDefault();
    if(inputValue.length < 8){
      setErrorMsg("Error: At least 8 characters")
    }else{
      setErrorMsg("")
    }
    console.log(errorMsg)

  }

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
      <form className="app__componentCtn" onSubmit={onSubmit}> 
      {currentPage ==="home" && <Home components={components} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
       {currentPage ==="TextField" 
       && <TextField inputValue={inputValue} blur={blur} setBlur={setBlur} focus={focus} setFocus={setFocus} handleInputValue={handleInputValue} errorMsg={errorMsg} setErrorMsg={setErrorMsg}/>
       }
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
