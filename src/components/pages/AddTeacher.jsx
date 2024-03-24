import React, { useState, useEffect } from "react";
import { PageWrapper } from "../ui/styledComponents";
import InputField from "../ui/InputField";
import { useNavigate } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

export const AddTeacher = () => {
  const [firstName, setFirstName] = useState("");
  const [initials, setInitials] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [designationData, setDesignationData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      firstName: firstName,
      initials: initials,
      email: email,
      designatiom: designatiom,
      dateOfBirth: dateOfBirth,
      joiningDate: joiningDate,
      phone: phone,
      photo: photo,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(data);
  };

  useEffect(() => {
    async function getDesignation() {
      const result = await httpServices.header.get(
        config.apiUrl + "/teacher/designations"
      );
      console.log(result.data.results);
      setDesignationData(result.data.results);
    }

    getDesignation();
  }, []);
  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="First Name"
          type="text"
          label="First Name"
          id="first-name"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          placeholder="Initials"
          type="text"
          label="Initials"
          id="initials"
          value={initials}
          handleChange={(e) => setInitials(e.target.value)}
        />
        <InputField
          placeholder="Email"
          type="email"
          label="Email"
          id="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          placeholder="Designation"
          type="text"
          label="Designation"
          id="designation"
          value={designation}
          handleChange={(e) => setDesignation(e.target.value)}
        />
        <InputField
          placeholder="DOB"
          type="date"
          label="Date of birth"
          id="dob"
          value={dateOfBirth}
          handleChange={(e) => setDateOfBirth(e.target.value)}
        />
        <InputField
          placeholder="Joining Date"
          type="date"
          label="Joining date"
          id="joining-date"
          value={joiningDate}
          handleChange={(e) => setJoiningDate(e.target.value)}
        />
        <InputField
          placeholder="Phone"
          type="text"
          label="Phone"
          id="phone"
          value={phone}
          handleChange={(e) => setPhone(e.target.value)}
        />
        <InputField
          placeholder="Photo"
          type="file"
          label="Photo"
          id="photo"
          value={photo}
          handleChange={(e) => setPhoto(e.target.value)}
        />
        <InputField
          placeholder="Password"
          type="password"
          label="Password"
          id="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          placeholder="Confirm Password"
          type="password"
          label="Confirm Password"
          id="confirm-password"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
        <InputField type="submit" />
      </form>
    </PageWrapper>
  );
};
