import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from "react-icons/fa";
import httpServices from "../../../services/httpServices";
import config from "../../../config.json";
import "./style.css";
import { PageWrapper } from "../../ui/styledComponents";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 380px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
  }
`;
const Card = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  height: 120px;
  width: 90%;
  border: solid 1px #b3b1ad;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media (min-width: 380px) {
    flex-direction: column;
    height: 180px;
    width: 200px;
  }
`;
const CardImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const CardTextSection = styled.div`
  flex-direction: column;
  margin-left: 2rem;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 0.5rem;
  color: #1b5e20;
  text-align: center;
`;

const IconSection = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0.8rem;
`;

const Icon = styled(Link)`
  font-size: 18px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: #1b5e20;
`;

const AddButton = styled.button`
  color: #e6b711;
  background-color: #1b5e20;
  padding: 1rem;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  margin: 1rem;
`;

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getTeachers() {
      const result = await httpServices.header.get(
        config.apiUrl + "/teacher/teachers"
      );

      setTeachers(result.data);
    }
    getTeachers();
  }, []);

  const handleAddTeacher = () => {
    navigate("/addteacher");
  };

  const filterTeacher = (id) => {
    return;
  };
  const teacherdetails = (id) => {
    teachers.filter();
  };
  return (
    <PageWrapper>
      <AddButton onClick={handleAddTeacher}>
        <FaPlus />
        AddTeacher
      </AddButton>
      <ListContainer>
        {teachers.map((teacher, index) => (
          <Card key={index}>
            <CardImage src={"http://127.0.0.1:8000".concat(teacher.photo)} />
            <CardTextSection>
              <Name>
                {teacher.first_name} {teacher.initials}
              </Name>
              <IconSection>
                <Icon
                  to="/teacherdetails"
                  state={teacher.id}
                  onClick={() => {
                    console.log(teacher.id);
                  }}
                >
                  <FaEye />
                </Icon>
                <Icon>
                  <FaTrashAlt />
                </Icon>
                <Icon>
                  <FaEdit />
                </Icon>
              </IconSection>
            </CardTextSection>
          </Card>
        ))}
      </ListContainer>
    </PageWrapper>
  );
};

export default Teachers;
