import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.accent};
  color: ${(props) => props.theme.light};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

export default Button;
