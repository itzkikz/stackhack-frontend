import React from "react";
import Base from "../Core/Base";
import '../Registration/Registration.css'
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <Base>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100%'}}>
      <div className=""> <div className="material-textfield mt-3">
      <input placeholder=" " type="text" />
      <label>Full Name</label>
    </div>
    <div className="material-textfield mt-3">
      <input placeholder=" " type="text" />
      <label>Mobile</label>
    </div>
    <div className="material-textfield mt-3">
      <input placeholder=" " type="text" />
      <label>E-Mail</label>
    </div>
    <div className="material-textfield mt-3">
      <input placeholder=" " type="file" />
      <label>Upload ID</label>
    </div>
    <div className="material-textfield mt-3">
    <select className="select-text" required>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
					</select>
					<label className="select-label">Registration type</label>
    </div>
    <div className="material-textfield mt-3">
      <input placeholder=" " type="text" />
      <label>No of Tickets</label>
    </div>
    <div className="mt-3" style={{width:'300px'}}>
    <button className="button float-right" type="button"><span>Button</span></button>
    </div></div>
    
    </div>
    </Base>
  );
};

export default Registration;
