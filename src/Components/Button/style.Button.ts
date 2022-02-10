import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 3px;
  button:active {
    box-shadow: none;
    margin-top: 5px;
  }
`;

export const Btn = styled.button`
  width: 20px;
  height: 20px;
  font-size: 11px;
  color: rgba(0,0,0,0.5);
  background: rgba(0,0,0,0.17);
  border: none;
  border-radius: 3px;
  outline: none;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
  cursor: pointer;
  transition-duration: 0.1s;
  margin-right: 3px;
`;
