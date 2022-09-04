import React from 'react';

export default function Navbar(props)
{
    return(
    <nav className={`navbar navcolor navbar-${props.mode} navbar-expand-lg   bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      {props.title}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >
            Home
          </a>
        </li></ul>
       
          
       <div className="d-flex">
        <div className="rounded  bord mb-3 mx-3" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.togglecolor('pri')}} ></div>
        </div>   
        <div className="d-flex">
        <div className="bg-success rounded mb-3 mx-3" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.togglecolor('success')}} ></div>
        </div>   
        <div className="d-flex">
        <div className="bg-danger rounded mb-3 mx-3" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.togglecolor('danger')}} ></div>
        </div>   
        <div className="d-flex">
        <div className="bg-warning rounded mb-3 mx-3" style={{height:'30px', width:'30px',cursor:'pointer'}} onClick={()=>{props.togglecolor('warning')}} ></div>
        </div>   
        
              
        
     
      
      <div className="form-check form-switch">
    <input
      className="form-check-input mx-3"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckChecked"
      defaultChecked=""
      onClick={props.togglestate} style={{cursor:'pointer'}}
    />
    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked" >
      Dark Mode
    </label>
  </div>


    </div></div>
    

</nav>)


}
