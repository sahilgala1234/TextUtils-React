
import React,{useState} from 'react'
import Alert from './alert';
export default function Textform(props)
{
    const [text, setText] = useState("Enter text here")
    const empty=()=>{setText("");}
    const handleonchange=(event)=>{console.log("on change");
setText(event.target.value);
}
const clear=()=>{
  setText("");
}
const handleCopy=()=>
{
  console.log("I am a copy");
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("Text copied","success");
}
    const handleupclick=()=>{
        console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase","success");
    }
    const handledownclick=()=>{
      
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success");
    }
    return(
        <>
        <br></br>
        <div  >
        <h1 className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
  <div className="mb-4 my-3">
    
    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleonchange} onClick={empty} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  <button type="button" className="btn btn-primary margin-left my-1" onClick={handleupclick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary margin-left my-1" onClick={handledownclick}>Convert to Lowercase</button>
  <button type="button" className="btn btn-primary margin-left my-1" onClick={clear}>Clear Text</button>
  <button type="button" className="btn btn-primary margin-left my-1" onClick={handleCopy}>Copy Text</button>
  </div>
 < div className="container">
    <h2 className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h2>
    <p className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}>{0.008*text.length} minutes of reading</p>
  </div>
  </div>
</>

    )
}