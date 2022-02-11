import React, { useState } from "react";
import * as S from 'Components/Input/style.input';

interface handlerFuncArgument{
    MessageValue: string,
    setMessageValue: React.Dispatch<React.SetStateAction<string>>
}

interface KeyDownArgument extends handlerFuncArgument{
    e : React.KeyboardEvent<HTMLTextAreaElement>
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

const handleOnChange = ({e, MessageValue, setMessageValue}:OnChangeArgument):void => {
    e.preventDefault();
    setMessageValue(e.target.value);
}

const Input = ():JSX.Element => {
    const [MessageValue, setMessageValue] = useState<string>('')

    return(
        <S.InputContainer>
            <S.MessageTextarea 
                placeholder="Message"
                value={MessageValue}
                onKeyDown={e=> {handleKeyDown({e, MessageValue, setMessageValue})}}
                onChange={e=>{handleOnChange({e, MessageValue, setMessageValue})}}/>
        </S.InputContainer>
    )
}

export default Input;
