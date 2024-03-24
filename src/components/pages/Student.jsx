import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

export default function Student() {
  const location = useLocation();
  const studensClass = location.state;
  const [students, setStudents] = useState([]);
  console.log(studensClass);

  useEffect(() => {
    async function getStudents() {
      const result = await httpServices.header.get(
        config.apiUrl + "/student/students/" + studensClass
      );
      console.log(result);
      setStudents(result.data["students"]);
    }
    getStudents();
  }, [students]);
  console.log(students);

  return <div>Student</div>;
}
