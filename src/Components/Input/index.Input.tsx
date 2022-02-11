import React, { useState , useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux/index.Redux';
import { MockDataType } from 'src/Types/type';
import * as S from 'Components/Input/style.input';

interface InputPropsType {
    reply : string
    ChatListData : MockDataType[]
    setChatListData : React.Dispatch<React.SetStateAction<MockDataType[]>>
}

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

interface SendMessageArgument {
    ChatListData : MockDataType[]
    setChatListData : React.Dispatch<React.SetStateAction<MockDataType[]>>
    MessageValue: string
    setMessageValue: React.Dispatch<React.SetStateAction<string>>
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

const handleSendMessage = ({MessageValue, setMessageValue,  ChatListData,  setChatListData}:SendMessageArgument):void => {
    const newChatListData = [...ChatListData];
    newChatListData.push()
}

const Input = ({reply, ChatListData,  setChatListData}:InputPropsType):JSX.Element => {
    const user = useSelector((state: RootState) => state.user);
    console.log(user);
    const [MessageValue, setMessageValue] = useState<string>('')

    useEffect( ()=> {

    MessageValue === '' ? setMessageValue(reply) : setMessageValue(reply+MessageValue.split("\n").pop());
    },[reply])

    return(
        <S.InputContainer>
            <S.MessageForm>
            <S.MessageTextarea 
                placeholder="Message"
                value={MessageValue}
                onKeyDown={e=> {handleKeyDown({e, MessageValue, setMessageValue})}}
                onChange={e=>{handleOnChange({e, setMessageValue})}}/>
            </S.MessageForm>
            <S.ButtonWarpper>
                <S.SendButton>
                    전송
                </S.SendButton>
            </S.ButtonWarpper>
        </S.InputContainer>
    )
}

export default Input;
