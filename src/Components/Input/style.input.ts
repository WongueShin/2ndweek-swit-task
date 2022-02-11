import styled from "styled-components";

export const InputContainer = styled.div`
    background-color: #FFFFFF;
    position: relative;
    height: 100px;
    left: 0;
    bottom: 0;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`
export const MessageForm = styled.form`
    box-sizing: border-box;
    height: 50px;
`

export const MessageTextarea = styled.textarea`
    background-color: #e6e6ee;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus{
        outline: none;
    }
`