import React, { useState , useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux/index.Redux';
import { MockDataType, userState } from 'src/Types/type';
import {USER_PROFILE_PATH} from 'Const/Constant';
import * as S from 'Components/Messenger/Input/style.input';

interface InputPropsType {
    reply : number
    ChatListData : MockDataType[]
    setChatListData : React.Dispatch<React.SetStateAction<MockDataType[]>>
}

interface handlerFuncArgument{
    setMessageValue: React.Dispatch<React.SetStateAction<string>>
}

interface OnChangeArgument extends handlerFuncArgument{
    e : React.ChangeEvent<HTMLTextAreaElement>
}

interface SendMessageArgument extends handlerFuncArgument{
    ChatListData : MockDataType[]
    setChatListData : React.Dispatch<React.SetStateAction<MockDataType[]>>
    MessageValue: string
    user: userState
}

interface KeyDownArgument extends SendMessageArgument{
    e : React.KeyboardEvent<HTMLTextAreaElement>,
}




const handleKeyDown = ({e, MessageValue, setMessageValue, ChatListData, setChatListData, user}:KeyDownArgument):void => {
    if(e.keyCode === 13){
        e.preventDefault();
        if(e.shiftKey){
            setMessageValue(MessageValue+'\n');
            return;
        }
        handleSendMessage({MessageValue, setMessageValue,  ChatListData,  setChatListData ,user});
    }
}

const handleOnChange = ({e, setMessageValue}:OnChangeArgument):void => {
    e.preventDefault();
    setMessageValue(e.target.value);
}

const handleSendMessage = ({MessageValue, setMessageValue,  ChatListData,  setChatListData ,user}:SendMessageArgument):void => {
    const newChatListData = [...ChatListData];
    newChatListData.push({
        userId: user.userId,
        userName: user.userName,
        profileImage: USER_PROFILE_PATH.ID_65bd3353,
        content: MessageValue,
        date: new Date().toISOString().replace('T', ' ').substring(0, 19),
        isDel: false
    })
    setChatListData(newChatListData);
    setMessageValue('');
}

const Input = ({reply, ChatListData,  setChatListData}:InputPropsType):JSX.Element => {
    const testAreaRef = useRef<HTMLTextAreaElement>(null);
    const user = useSelector((state: RootState) => state.user);
    const [MessageValue, setMessageValue] = useState<string>('')
    const [oldReplyIndex, setOldReplyIndex] = useState<number>(-1);
    useEffect( ()=> {
        if(reply === -1) return;
        const replyStr :string= `${ChatListData[reply].userName}\n${ChatListData[reply].content}`;
        if(MessageValue === ''){
            setMessageValue(replyStr)
        } else {
        if(oldReplyIndex === -1) setOldReplyIndex(reply)
        const oldReplyStr :string = `${ChatListData[oldReplyIndex].userName}\n${ChatListData[oldReplyIndex].content}`;
        setMessageValue(replyStr+MessageValue.replace(oldReplyStr,""));
        }
        setOldReplyIndex(reply);
    },[reply])

    useEffect(() => {
        if(testAreaRef.current){
            testAreaRef.current.scrollTop = testAreaRef.current.scrollHeight
        }
    }, [MessageValue])

    return(
        <S.InputContainer>
            <S.MessageForm>
                <S.MessageTextarea
                    ref={testAreaRef}                         
                    placeholder="Message"
                    value={MessageValue}
                    onKeyDown={e=> {handleKeyDown({e, MessageValue, setMessageValue, ChatListData, setChatListData, user})}}
                    onChange={e=>{handleOnChange({e, setMessageValue})}}
                />
            </S.MessageForm>
            <S.ButtonWarpper>
                <S.SendButton onClick={e=>{handleSendMessage({MessageValue, setMessageValue,  ChatListData,  setChatListData ,user})}}>
                    전송
                </S.SendButton>
            </S.ButtonWarpper>
        </S.InputContainer>
    )
}

export default Input;