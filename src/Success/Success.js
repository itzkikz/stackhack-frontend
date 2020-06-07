import React from "react";

const Success = ({regData}) => {
  return (
    <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
   <h1 className="text-success">Success</h1>
  <h5>Your Reg ID : {regData.reg_id}</h5>
    </div>
  </>
  );
};

export default Success;
