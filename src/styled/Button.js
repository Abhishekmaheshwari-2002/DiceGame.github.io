import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  border: none;
  color: white;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s background ease-in, transform 0.3s ease;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in; // Scale effect on hover
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
  }
`;
