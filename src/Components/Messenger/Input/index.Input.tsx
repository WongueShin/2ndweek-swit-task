import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux/index.Redux';
import { MockDataType, userState } from 'src/Types/type';
import { USER_PROFILE_PATH } from 'Const/Constant';
import * as S from 'Components/Messenger/Input/style.input';

interface InputPropsType {
  reply: string;
  setReply: React.Dispatch<React.SetStateAction<string>>;
  ChatListData: MockDataType[];
  setChatListData: React.Dispatch<React.SetStateAction<MockDataType[]>>;
}

interface handlerFuncArgument {
  setMessageValue: React.Dispatch<React.SetStateAction<string>>;
  reply: string;
}

interface OnChangeArgument extends handlerFuncArgument {
  e: React.ChangeEvent<HTMLTextAreaElement>;
}

interface SendMessageArgument extends handlerFuncArgument {
  ChatListData: MockDataType[];
  setChatListData: React.Dispatch<React.SetStateAction<MockDataType[]>>;
  MessageValue: string;
  user: userState;
  setReply: React.Dispatch<React.SetStateAction<string>>;
}

interface KeyDownArgument extends SendMessageArgument {
  e: React.KeyboardEvent<HTMLTextAreaElement>;
}

const handleKeyDown = ({
  e,
  MessageValue,
  setMessageValue,
  ChatListData,
  setChatListData,
  reply,
  setReply,
  user,
}: KeyDownArgument): void => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (e.shiftKey) {
      setMessageValue(MessageValue + '\n');
      return;
    }
    handleSendMessage({
      MessageValue,
      setMessageValue,
      ChatListData,
      setChatListData,
      reply,
      setReply,
      user,
    });
  }
  if (e.key === 'Backspace' && MessageValue.length === 0) {
    setReply('');
  }
};

const handleOnChange = ({
  e,
  setMessageValue,
  reply,
}: OnChangeArgument): void => {
  e.preventDefault();
  setMessageValue(e.target.value.slice(reply.length));
};

const handleSendMessage = ({
  MessageValue,
  setMessageValue,
  ChatListData,
  setChatListData,
  reply,
  setReply,
  user,
}: SendMessageArgument): void => {
  if (MessageValue.length === 0) {
    alert('메시지를 입력해주세요');
    return;
  }
  const offset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - offset);
  const newChatListData = [...ChatListData];
  newChatListData.push({
    userId: user.userId,
    userName: user.userName,
    profileImage: USER_PROFILE_PATH.ID_65bd3353,
    content: reply + MessageValue,
    date: today.toISOString().replace('T', ' ').substring(0, 19),
    isDel: false,
  });
  setChatListData(newChatListData);
  setMessageValue('');
  setReply('');
};

const Input = ({
  reply,
  setReply,
  ChatListData,
  setChatListData,
}: InputPropsType): JSX.Element => {
  const testAreaRef = useRef<HTMLTextAreaElement>(null);
  const user = useSelector((state: RootState) => state.user);
  const [MessageValue, setMessageValue] = useState<string>('');

  useEffect(() => {
    if (testAreaRef.current) {
      testAreaRef.current.scrollTop = testAreaRef.current.scrollHeight;
    }
  }, [MessageValue, reply]);

  return (
    <S.InputContainer>
      <S.MessageForm>
        <S.MessageTextarea
          ref={testAreaRef}
          placeholder="Message"
          value={reply + MessageValue}
          onKeyDown={e => {
            handleKeyDown({
              e,
              MessageValue,
              setMessageValue,
              ChatListData,
              setChatListData,
              reply,
              setReply,
              user,
            });
          }}
          onChange={e => {
            handleOnChange({ e, reply, setMessageValue });
          }}
        />
      </S.MessageForm>
      <S.ButtonWarpper>
        {MessageValue.length !== 0? <S.Notice>Shift+Enter로 새 행을 추가합니다.</S.Notice> : <></>}
        <S.SendButton
          disabled={MessageValue.length === 0}
          onClick={e => {
            handleSendMessage({
              MessageValue,
              setMessageValue,
              ChatListData,
              setChatListData,
              reply,
              setReply,
              user,
            });
          }}
        >
          전송
        </S.SendButton>
      </S.ButtonWarpper>
    </S.InputContainer>
  );
};

export default Input;