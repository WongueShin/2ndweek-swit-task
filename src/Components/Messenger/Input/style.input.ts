import styled from "styled-components";

export const InputContainer = styled.div`
    background-color: #FFFFFF;
    position: relative;
    left: 0;
    bottom: 0;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`
export const MessageForm = styled.form`
    box-sizing: border-box;
    height: 7vh;
`
export const MessageTextarea = styled.textarea`
    background-color: #e6e6ee;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 100%;
    resize: none;
    box-sizing: border-box;
    overflow: auto;
    &:focus{
        outline: none;
    }
    &::-webkit-scrollbar {
        border-radius: 6px;
        background: none;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
         border-radius: 6px;
        background-color: #c4c4bd;
    }
`
export const ButtonWarpper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-right: 5px;
    display: flex;
    justify-content: end;
`
export const Notice = styled.div`
    color: 	#999999;
    margin-right: 5px;
`

export const SendButton = styled.button`
    width: 15vw;
    max-width: 150px;
    height: 5vh;
    max-height: 35px;
    background-color: #57b785;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    box-shadow: 1px 3px 0 rgb(0,0,0,0.5);

    &:hover{
        background-color: #46b37a;
    }

    &:active{
        box-shadow: 1px 1px 0 rgb(0,0,0,0.5); 
        position: relative;
        top:2px;
    }
    &:disabled{
        background-color: #575757;
        color: #ababab;
    }
`