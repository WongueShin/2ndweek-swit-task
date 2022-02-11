import styled from "styled-components";

export const MessengerContainer = styled.div`
  width: 500px;
`;

export const ChatList = styled.ul`
  list-style: none;
  background: #e2e5ee;
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

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

export const Message = styled.li<{ userId: string; loginUser: string }>`
  float: left;
`;
