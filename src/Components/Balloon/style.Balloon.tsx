import styled from "styled-components";

export const BalloonContainer = styled.div`
`;

export const Container = styled.div<{ userName: string }>`
  display: flex;
  width: 200px;
  height: fit-content;
  background: ${(props) => (props.userName !== "사람3" ? "#fff" : "#5c5cfb")};
  position: relative;
  color: ${(props) => (props.userName !== "사람3" ? "#000" : "#fff")};
  padding: 12px;
  margin: ${(props) => (props.userName !== '사람3' ? "0 0 0 20px" : "0 20px 0 0")};
  border-radius: 8px;
  word-break: break-all;

  &:after {

    border-top: ${(props) => (props.userName !== "사람3") ? "2px" : "10px" } solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid ${(props) => (props.userName !== "사람3" ? "#fff" : "#5c5cfb")};
    border-bottom: ${(props) => (props.userName !== "사람3") ? "10px" : "2px" } solid transparent;
    transform: rotate(${(props) => props.userName !== '사람3' ? "0" : "45deg" });
    content: "";
    position: absolute;
    z-index: 100;
    top:  ${(props) => props.userName !== '사람3' ? "9px" : "3px"};
    left: ${(props) => props.userName !== '사람3' ? "-18px" : "unset"};
    right: ${(props) => props.userName !== '사람3' ? "unset" : "-7px"};
  }
`;