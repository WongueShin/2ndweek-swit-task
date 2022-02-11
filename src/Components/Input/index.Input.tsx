import React, { useState } from "react";
import * as S from 'Components/Input/style.input';

interface handlerFuncArgument{
    setMessageValue: React.Dispatch<React.SetStateAction<string>>
}

interface KeyDownArgument extends handlerFuncArgument{
    e : React.KeyboardEvent<HTMLTextAreaElement>,
    MessageValue: string
}
interface OnChangeArgument extends handlerFuncArgument{
    e : React.ChangeEvent<HTMLTextAreaElement>
}

const handleKeyDown = ({e, MessageValue, setMessageValue}:KeyDownArgument):void => {
    if(e.keyCode === 13){
        e.preventDefault();
        if(e.shiftKey){
            setMessageValue(MessageValue+'\n');
            return;
        }
        setMessageValue('');
    }
}

const handleOnChange = ({e, setMessageValue}:OnChangeArgument):void => {
    e.preventDefault();
    setMessageValue(e.target.value);
}

const Input = ():JSX.Element => {
    const [MessageValue, setMessageValue] = useState<string>('')

    return(
        <S.InputContainer>
            <form>
            <S.MessageTextarea 
                placeholder="Message"
                value={MessageValue}
                onKeyDown={e=> {handleKeyDown({e, MessageValue, setMessageValue})}}
                onChange={e=>{handleOnChange({e, setMessageValue})}}/>
            </form>
        </S.InputContainer>
    )
}

export default Input;
