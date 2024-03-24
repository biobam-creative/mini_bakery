import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import {
  PageWrapper,
  Picture,
  DetailPrimary,
  DetailSecondary,
} from "../ui/styledComponents";

const TeacherDetails = () => {
  const [teacherdetails, setTeacherDetails] = useState({});
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    async function getTeacherDetails() {
      const result = await httpServices.header.get(
        config.apiUrl + "/teacher/" + location.state
      );
      setTeacherDetails(result.data);
    }
    getTeacherDetails();
  }, []);

  console.log(teacherdetails);
  return (
    <PageWrapper>
      <Picture src={"http://127.0.0.1:8000" + teacherdetails?.photo} />
      <div>
        <DetailPrimary>Name</DetailPrimary>:{" "}
        <DetailSecondary>
          {teacherdetails?.first_name} {teacherdetails?.initials}
        </DetailSecondary>
      </div>
      <div>
        <DetailPrimary>Designation</DetailPrimary>:{" "}
        <DetailSecondary>{teacherdetails.designation?.title}</DetailSecondary>
      </div>
      <div>
        <DetailPrimary>Date Joined </DetailPrimary>:{" "}
        <DetailSecondary>{teacherdetails?.joining_date}</DetailSecondary>
      </div>
      <div>
        <DetailPrimary>Subject Taught </DetailPrimary>:{" "}
        {teacherdetails.expertise ? (
          teacherdetails.expertise.map((expertise, index) => (
            <span key={expertise.id}>{expertise.name}</span>
          ))
        ) : (
          <span>{""}</span>
        )}
      </div>
    </PageWrapper>
  );
};

export default TeacherDetails;
