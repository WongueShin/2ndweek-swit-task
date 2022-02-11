import styled from "styled-components";

export const MessengerContainer = styled.div`
  width: 500px;
  margin-left: 30px;
`

export const ChatList = styled.ul`
  list-style: none;
  background:#E2E5EE;
  height: 60vh;
  display:flex;
  flex-direction:column;
  padding:0;
  margin: 0;
`;

export const BoxShadowWarpper = styled.div`
  overflow: hidden;
  &:after{
    content: "";
    display: block;
    position: relative;
    left: -10%;
    top: -40px;
    width: 120%;
    height: 40px;
    box-shadow: inset 0px -10px 10px rgba(0,0,0,0.1);
  }
`

export const Message = styled.li<{userId:string,loginUser:string}>`
float:left;
`;
