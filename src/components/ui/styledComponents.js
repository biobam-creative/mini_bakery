import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 1.5rem;
`;

const Picture = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
`;

const DetailPrimary = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`;

const DetailSecondary = styled.span`
  color: #000;
  font-size: 20px;
`;

const Select = styled.select`
  width: 80%;
  color: ${({ type }) => (type !== "submit" ? "#3f6b42" : "#ffc107")};
  margin: 0.5rem;
  border: none;
  border-bottom: ${({ type }) =>
    type !== "submit" ? "1px solid #3f6b42" : "none"};
  border-radius: ${({ type }) => (type !== "submit" ? "none" : "5px")};
  background-color: ${({ type }) => (type !== "submit" ? "none" : "#3f6b42")};
  height: ${({ height }) => (height ? height : "25px")};
  &:focus {
    outline: none;
    background-color: #ffc107;
  }
`;

export { PageWrapper, Picture, DetailPrimary, DetailSecondary, Select };
