import styled from "styled-components";

export const MessengerContainer = styled.div`
  width: 90vw;
  height: 90vh;
  padding: 9px;
  /* margin-top: 9.9vh; */
  margin-left: 10vw;
  border: solid 1px #c3c3c3;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const ChatList = styled.ul`
  list-style: none;
  background: #e2e5ee;
  height: 65vh;
  display:flex;
  flex-direction:column;
  padding: 0 3vw;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 5px;

  &::-webkit-scrollbar {
    border-radius: 6px;
    background: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4bd;
  }
`;

export const BoxShadowWarpper = styled.div`
  overflow: hidden;
  &:after{
    content: "";
    display: block;
    position: relative;
    left: -10%;
    top: -20px;
    width: 120%;
    height: 20px;
    box-shadow: inset 0px -10px 10px rgba(0,0,0,0.1);
  }
`

export const Message = styled.li<{userId:string,loginUser:string}>`
  float:left;
  display: flex;
  flex-direction: column;
  padding: 0;
`;