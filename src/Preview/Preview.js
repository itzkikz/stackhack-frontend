import React from "react";
import Base from "../Core/Base";

const Preview = () => {
  return (
    <Base>
    <div className="d-flex flex-column justify-content-center full-width align-items-center">
    <div className="row">
    <div className="card shadow-lg p-3 bg-white rounded"  >
    <div className="card-body">
      <h5 className="card-title">Kiran Nandakumar</h5>
      <p className="card-text">kirannandakumar94@gmail.com9497216679</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Registeration Type<br></br>AAA</li>
      <li className="list-group-item">Number of tickets<br/>1</li>
    </ul>
    <img  height={180} width={280} src="https://dps.mn.gov/divisions/dvs/PublishingImages/new-cards/mn-adult-dl.jpg" alt="Card image cap"></img>
  </div></div>
  <div className="mt-3" style={{width:'300px'}}>
  <button>Back</button>
    <button className="float-right">Submit</button>
    </div>
    </div>
    </Base>
  );
};

export default Preview;
