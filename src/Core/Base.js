import React from 'react';
import './Base.css';


const Base = ({children}) => {
    return(
        <div className="d-flex flex-column justify-content-center full-width align-items-center" style={{height:'100%',backgroundColor:'#3D348B'}}><div className="container-fluid shadow-lg rounded">
        <div className="row" style={{height:'100%'}}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex flex-column justify-content-center full-width align-items-center" style={{backgroundColor:'#7678ED'}}><h1 style={{color:'white'}} >Stack<span style={{color:'#F7B801'}}>Hack</span> 1.0</h1><h5 style={{color:'white'}}>Event Registration</h5></div>
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0" style={{height:'100%',backgroundColor:'white'}} >{children}</div>
        </div>
    </div></div>
        
    )
}


export default Base;