import styled from "styled-components";

export const BalloonContainer = styled.div`
`;

export const Container = styled.div<{userId:string,loginUser:string}>`
  display: flex;
  width: 200px;
  height: fit-content;
  background: ${(props) => (props.userId !== props.loginUser ? "#fff" : "#5c5cfb")};
  position: relative;
  color: ${(props) => (props.userId !== props.loginUser ? "#000" : "#fff")};
  padding: 12px;
  margin: ${(props) => (props.userId !== props.loginUser ? "0 0 0 20px" : "0 20px 0 0")};
  border-radius: 8px;
  word-break: break-all;

  &:after {

    border-top: ${(props) => (props.userId !== props.loginUser) ? "2px" : "10px" } solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid ${(props) => (props.userId !== props.loginUser ? "#fff" : "#5c5cfb")};
    border-bottom: ${(props) => (props.userId !== props.loginUser) ? "10px" : "2px" } solid transparent;
    transform: rotate(${(props) => props.userId !== props.loginUser ? "0" : "45deg" });
    content: "";
    position: absolute;
    z-index: 100;
    top:  ${(props) => props.userId !== props.loginUser ? "9px" : "3px"};
    left: ${(props) => props.userId !== props.loginUser ? "-18px" : "unset"};
    right: ${(props) => props.userId !== props.loginUser ? "unset" : "-7px"};
  }
`;