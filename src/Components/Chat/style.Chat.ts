import styled from "styled-components";

export const ChatWarpper = styled.div<{userId:string,loginUser:string}>`
    display: flex;
    flex-direction: row;
    height: fit-content;
    padding:10px;
    justify-content: ${props=>props.userId === props.loginUser ? "flex-end" : "flex-start"};
`

export const BalloonWarpper = styled.div`
    margin-top: 9.5px;
    width: fit-content;
    height: fit-content;
`