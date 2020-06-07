import React, { useState } from "react";
import "./Base.css";
import Registration from "../Registration/Registration";
import Preview from "../Preview/Preview";
import Success from "../Success/Success";

const Base = () => {
  const [regData, setRegData] = useState({
    name: "",
    mobile: "",
    email: "",
    id_image: "",
    reg_type: "Self",
    tickets: 1,
    formData: new FormData(),
    image_preview: "",
    reg_id: "",
  });

  const [preview, setPreview] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div
      className="d-flex flex-column justify-content-center full-width align-items-center"
      style={{ height: "100%", backgroundColor: "#3D348B" }}
    >
      <div className="container-fluid shadow-lg rounded">
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center full-width align-items-center"
            style={{ backgroundColor: "#7678ED" }}
          >
            <h1 style={{ color: "white" }}>
              Stack<span style={{ color: "#F7B801" }}>Hack</span> 1.0
            </h1>
            <h5 style={{ color: "white" }}>Event Registration</h5>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0"
            style={{ maxHeight: "100%", backgroundColor: "white" }}
          >
            {preview === false && success === false && (
              <Registration
                regData={regData}
                setRegData={setRegData}
                setPreview={setPreview}
              />
            )}
            {preview && success === false && (
              <Preview
                regData={regData}
                setRegData={setRegData}
                setPreview={setPreview}
                setSuccess={setSuccess}
              />
            )}
            {success && <Success regData={regData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
