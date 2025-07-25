import React, { useState } from "react";
import InputField from "../InputField";

const IdentityUpload = ({ formData, handleChange, idPreview }) => {
  return (
    <div
      style={{
        width: "90%",
        margin: "20px 20px 20px 0px",
        background: "rgb(215, 215, 215)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <label htmlFor="id_image" style={{ cursor: "pointer" }}>
        Click to upload ID Card image
      </label>
      <input
        placeholder={"Id Photograph"}
        type={"file"}
        // value={formData.selfie_image || ""}
        accept="image/*"
        name="id_image"
        onChange={handleChange}
        id={"id_image"}
        // style={{ display: "none" }}
      />
      {idPreview && (
        <div style={{ height: "40px", margin: "10px 0 0 0 " }}>
          <img style={{ height: "100%" }} src={idPreview} alt="id preview" />
        </div>
      )}
    </div>
  );
};

export default IdentityUpload;
