import React, { useState } from "react";

const ImagePreview = ({image}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
    console.log("cliked");
  };

  return (
    <div>
      <img
      height={100}
      className="img-responsive"
        style={{ position: "static", top: "10%" ,width: "100%"}}
        src={image}
        onClick={handleShowDialog}
        alt="no image"
      />
      {isOpen && (
        <div
          className="dialog"
          style={{ position: "absolute",width:'5%',top:'10%' }}
          open
          onClick={handleShowDialog}
        >
          <img
            className="image"
            src={image}
            onClick={handleShowDialog}
            alt="no image"
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
