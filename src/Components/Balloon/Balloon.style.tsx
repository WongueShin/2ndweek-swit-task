import styled from "styled-components";

export const BalloonContainer = styled.div``;

export const Container = styled.div<{ background: string }>`
  width: 200px;
  height: fit-content;
  background: ${(props) => (props.background === "" ? "#fff" : "#5c5cfb")};
  position: absolute;
  color: ${(props) => (props.background === "" ? "#000" : "#fff")};
  padding: 12px;
  margin-left: 20px;
  border-radius: 8px;
  word-break: break-all;

  &:after {
    border-top: 6px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid
      ${(props) => (props.background === "" ? "#fff" : "#5c5cfb")};
    border-bottom: 6px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    left: -18px;
  }
`;