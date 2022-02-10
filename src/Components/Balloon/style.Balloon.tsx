import styled from "styled-components";

export const BalloonContainer = styled.div`
`;

export const Container = styled.div<{ background: string }>`
  display: flex;
  width: 200px;
  height: fit-content;
  background: ${(props) => (props.background === "사람3" ? "#fff" : "#5c5cfb")};
  position: relative;
  color: ${(props) => (props.background === "사람3" ? "#000" : "#fff")};
  padding: 12px;
  margin-left: 20px;
  border-radius: 8px;
  word-break: break-all;

  &:after {
    border-top: 2px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid
      ${(props) => (props.background === "사람3" ? "#fff" : "#5c5cfb")};
    border-bottom: 10px solid transparent;
    content: "";
    position: absolute;
    top: 8px;
    left: -18px;
  }
`;