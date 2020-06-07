import React, { useState } from "react";
import "../Registration/Registration.css";
import Input, { isValidPhoneNumber } from "react-phone-number-input/input";

const Registration = ({ regData, setRegData, setPreview }) => {
  const {
    name,
    mobile,
    email,
    reg_type,
    tickets,
    formData,
    image_preview,
  } = regData;

  formData.set("reg_type", reg_type);
  formData.set("tickets", tickets);

  const [errors, setErrors] = useState({});
  const [reqFields, setReqFields] = useState(false);

  const handleChange = (name) => (event) => {
    const value =
      name === "id_image" ? event.target.files[0] : event.target.value;

    switch (name) {
      case "name":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "tickets":
        errors.tickets = value > 0 && value !== "" ? "" : "Choose tickets";
        break;
      default:
        break;
    }
    setErrors({ ...errors });
    if (name === "id_image") {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        setRegData({ ...regData, image_preview: reader.result });
      };
      reader.readAsDataURL(file);
    }
    formData.set(name, value);
    setRegData({ ...regData, [name]: value });
  };

  const validEmailRegex = RegExp(
    /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
  );

  const onSubmit = () => {
    if (
      name !== "" &&
      mobile !== "" &&
      email !== "" &&
      reg_type !== "" &&
      tickets !== "" &&
      image_preview !== ""
    ) {
      setPreview(true);
    } else {
      setReqFields(true);
    }
  };

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <form>
          <div className="">
            {reqFields && (
              <small className="text-danger">Please fill all fields</small>
            )}
            <div className="material-textfield mt-3">
              <input
                placeholder=" "
                onChange={handleChange("name")}
                value={name}
                type="text"
                name="name"
              />
              <label>Full Name</label>
            </div>
            <small className="text-danger">
              {errors.fullName}
            </small>

            <div className="material-textfield mt-3">
              <Input
                country="IN"
                value={mobile}
                onChange={(mobile) => {
                  mobile = mobile === undefined ? "" : mobile;
                  formData.set("mobile", mobile);
                  setRegData({ ...regData, mobile: mobile });
                }}
              />
              <label>Mobile</label>
            </div>
            {mobile && isValidPhoneNumber(mobile) === false && (
              <small className="text-danger">Enter a valid mobile number</small>
            )}
            <div className="material-textfield mt-3">
              <input
                placeholder=" "
                onChange={handleChange("email")}
                defaultValue={email}
                type="email"
                name="email"
              />
              <label>E-Mail</label>
            </div>
            <small className="text-danger">{errors.email}</small>

            <div className="mt-3">
              <div className="upload-btn-wrapper">
                <button className="btn">Upload a file</button>
                <input type="file" onChange={handleChange("id_image")} />
              </div>
            </div>
            <div className="material-textfield mt-3">
              <select
                className="select-text"
                required
                onChange={handleChange("reg_type")}
              >
                <option value="Self">Self</option>
                <option value="Group">Group</option>
                <option value="Corporate">Corporate</option>
                <option value="Others">Others</option>
              </select>
              <label className="select-label">Registration type</label>
            </div>
            <div className="material-textfield mt-3">
              <input
                placeholder=" "
                type="number"
                onChange={handleChange("tickets")}
                value={tickets}              />
              <label>No of Tickets</label>
            </div>
            <small className="text-danger">{errors.tickets}</small>
            <div className="mt-3" style={{ width: "300px" }}>
              <button
                className="button float-right"
                type="button"
                onClick={onSubmit}
              >
                <span>Button</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
