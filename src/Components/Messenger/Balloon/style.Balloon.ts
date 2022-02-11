import styled from "styled-components";

export const BalloonContainer = styled.div<{
  userId: string;
  loginUser: string;
}>``;

export const Header = styled.div<{ userId: string; loginUser: string }>`
  text-align: ${(props) =>
    props.userId !== props.loginUser ? "left" : "right"};
  margin: ${(props) =>
    props.userId !== props.loginUser ? "0 0 4px 25px" : "0 25px 4px 0"};
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`;

export const Body = styled.div<{ userId: string; loginUser: string }>`
  display: flex;
  width: 200px;
  height: fit-content;
  background: ${(props) =>
  props.userId !== props.loginUser ? "#fff" : "#5c5cfb"};
  position: relative;
  color: ${(props) => (props.userId !== props.loginUser ? "#000" : "#fff")};
  padding: 12px;
  margin: ${(props) =>
  props.userId !== props.loginUser ? "0 0 0 20px" : "0 20px 0 0"};
  border-radius: 8px;
  float: ${(props) => (props.userId !== props.loginUser ? "left" : "right")};
  word-break: break-all;

  pre {
    white-space: pre-wrap;
  }

  &:after {
    border-top: ${(props) =>
        props.userId !== props.loginUser ? "2px" : "10px"}
      solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid
      ${(props) => (props.userId !== props.loginUser ? "#fff" : "#5c5cfb")};
    border-bottom: ${(props) =>
        props.userId !== props.loginUser ? "10px" : "2px"}
      solid transparent;
    transform: rotate(
      ${(props) => (props.userId !== props.loginUser ? "0" : "45deg")}
    );
    content: "";
    position: absolute;
    z-index: 100;
    top: ${(props) => (props.userId !== props.loginUser ? "9px" : "3px")};
    left: ${(props) => (props.userId !== props.loginUser ? "-18px" : "unset")};
    right: ${(props) => (props.userId !== props.loginUser ? "unset" : "-7px")};
  }
`;
