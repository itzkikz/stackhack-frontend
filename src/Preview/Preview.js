import React from "react";
import { API } from "../backend";

const Preview = ({ regData, setPreview, setSuccess, setRegData }) => {
  const {
    name,
    mobile,
    email,
    reg_type,
    tickets,
    formData,
    image_preview,
  } = regData;
  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}event/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    }).then(response => response.json())
    .then(data => {
      setRegData({...regData,reg_id:data.reg_id})
      setSuccess(true);
    })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="row" >
        <div className="col-12 col-sm-12 col-lg-12 col-md-12">
          <div className="card border-0 bg-white rounded d-flex flex-column justify-content-center full-width">
            <div className="card-body">
  <h5 className="card-title">{name}</h5>
  <p className="card-text">{email}</p>
  <p className="card-text">{mobile}</p>
              <p className="card-text">
                Registeration Type<br></br>{reg_type}
              </p>
              <p className="card-text">
                Number of tickets
                <br />{tickets}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-12 col-md-12  d-flex flex-column justify-content-center full-width">
        <img
            style={{ width: "100%",height:"180px" }}
            className="img-responsive img-fluid img-thumbnail"
            src={image_preview}
            alt="Card"
          ></img>
        </div>
        <div className="col-12 mt-1 d-flex justify-content-around">
          <button
            className="button"
            type="button"
            onClick={() => {
              setPreview(false);
            }}
          >
            <span>Back</span>
          </button>
          <button className="button" onClick={onSubmit}>
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
