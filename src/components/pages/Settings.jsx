import React, { useContext, useState } from "react";
import { PageWrapper, SectionBox } from "../styledComponents";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import httpServices from "../../services/httpServices";
import { pageLoadingContext } from "../../store/PageLoadingContext";
import config from "../../config.json";

const Settings = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setPageLoading } = useContext(pageLoadingContext);

  const handleCardClick = async (change) => {
    const email = localStorage.getItem("user_email");
    const data = { email: email, change: change };
    setPageLoading(true);
    await httpServices
      .post(config.apiUrl + "/user/request_Password_change", data)
      .then((response) => {
        navigate("/verification");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
    setPageLoading(false);
  };
  return (
    <PageWrapper place="center">
      <SectionBox>
        <SettingsCard onClick={() => handleCardClick("password_reset")}>
          Change Password
        </SettingsCard>
        <SettingsCard onClick={() => handleCardClick("pin-change")}>
          Change Transaction Pin
        </SettingsCard>
      </SectionBox>
    </PageWrapper>
  );
};

const SettingsCard = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 10px;
  border-top: 1px solid;
  cursor: pointer;
  color: #7359c6;
  font-size: 16px;
  margin: 0;
`;

export default Settings;
