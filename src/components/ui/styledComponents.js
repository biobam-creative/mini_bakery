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

export { PageWrapper, Picture, DetailPrimary, DetailSecondary };
