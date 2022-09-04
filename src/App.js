import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React,{useState} from 'react';
import Alert from './alert'
import { buildQueries } from '@testing-library/react';
 

function App() {
  const [mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setalert(null)},1500)
}
  const bodyremoveclasses=()=>
  {
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');

  }
  const togglestate=()=>{
  
   
    if(mode==='light') {document.body.style.backgroundColor='blue';setmode('dark'); showalert("dark mode has been enabled","success");
  document.title='TextUtilities-Dark mode'}
    else{document.body.style.backgroundColor='white';setmode('light');document.title='TextUtilities'  }
  }
  const togglecolor=(cls)=>{
    bodyremoveclasses();
    
    console.log(cls);
    document.body.classList.add('bg-'+cls);
  }
  return (<>
  
   <Navbar title="TextUtils" mode={mode} togglestate={togglestate} togglecolor={togglecolor} ></Navbar>
   <Alert alert={alert}></Alert>
   
    
  <div className="container" > <Textform showalert={showalert} heading="Enter the text to analyse" mode={mode} ></Textform></div>
   </>
  );
}

export default App;
