import styled from "styled-components";

export const ButtonContainer = styled.div`

  display: flex;
  
  button:active {
    box-shadow: none;
    margin-top: 5px;
  }
`;

export const Btn = styled.button`
  width: 50px;
  height: 30px;
  background: #f9a910;
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: 1px 2px 3px #000;
  cursor: pointer;
  transition-duration: 0.1s;
  margin-right:15px;
`;
