import React, { useState, useEffect } from "react";
import { PageWrapper, Select } from "../ui/styledComponents";
import InputField from "../ui/InputField";
import { useNavigate } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

export const AddTeacher = () => {
  const [firstName, setFirstName] = useState("");
  const [initials, setInitials] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState([]);
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [phone, setPhone] = useState(null);
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [designationData, setDesignationData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("initials", initials);
    formData.append("email", email);
    formData.append("designation", designation);
    formData.append("expertise", expertise);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("joiningDate", joiningDate);
    formData.append("phone", phone);
    formData.append("photo", photo);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    const response = await httpServices.header.post(
      config.apiUrl + "/teacher/add",
      formData
    );
  };

  useEffect(() => {
    async function getData() {
      const designationResponse = await httpServices.header.get(
        config.apiUrl + "/teacher/designations"
      );
      setDesignationData(designationResponse.data.results);
      const subjectResponse = await httpServices.header.get(
        config.apiUrl + "/teacher/subjects"
      );
      setSubjectData(subjectResponse.data.results);
    }
    setLoading(false);

    getData();
  }, []);
  if (loading === true) {
    return <div>Loading</div>;
  }
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
        <Select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        >
          <option value="">Designation</option>
          {designationData.map((designation) => (
            <option key={designation.id} value={designation.title}>
              {designation.title}
            </option>
          ))}
        </Select>
        <Select
          height="100px"
          value={expertise}
          multiple
          onChange={(e) =>
            setExpertise(
              [...e.target.options]
                .filter((option) => option.selected)
                .map((option) => option.value)
            )
          }
        >
          <option value={""}>Hold control to select multiple subject</option>
          {subjectData.map((subject) => (
            <option key={subject.id} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </Select>
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
          // value={photo}
          handleChange={(e) => setPhoto(e.target.files[0])}
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
