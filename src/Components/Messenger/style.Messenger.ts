import styled from "styled-components";

export const MessengerContainer = styled.ul`
  list-style: none;
  background:#E2E5EE;
  height: 60vh;
  width: 500px;
  display:flex;
  flex-direction:column;
  padding:0;
`;

export const Message = styled.li<{userId:string,loginUser:string}>`
float:left;
`;
