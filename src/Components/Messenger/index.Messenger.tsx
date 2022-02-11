import * as S from 'Components/Messenger/style.Messenger';
import React, { useEffect, useState } from 'react';
import Chat from 'Components/Chat/index.Chat';
import { useSelector } from 'react-redux';
import { messageJson } from 'Components/Messenger/data';
import { MockDataType } from 'src/Types/type';
import { RootState } from 'src/Redux/index.Redux';
import Input from 'Components/Input/index.Input';
import Header from 'Components/Header/index.Header';

const Messenger = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  let messageJsonCopy = JSON.parse(JSON.stringify(messageJson));
  const [data, setData] = useState<MockDataType[]>(messageJsonCopy);

  useEffect(() => {
    let tmpData: MockDataType[] = [...data];
    if (user.userId) {
      console.log('로그인');
      tmpData.map(el => {
        if (el.userId === user.userId) {
          return (el.userName = user.userName);
        } else return null;
      });
      setData(tmpData);
    } else {
      console.log('로그아웃');
      let messageJsonReset = JSON.parse(JSON.stringify(messageJson));
      setData(messageJsonReset);
    }
  }, [user.userName, user.userId]);

  const onDelete = (index: number): void => {
    let tmpData: MockDataType[] = [...data];
    tmpData[index].isDel = true;
    setData(tmpData);
  };
  return (
    <S.MessengerContainer>
      <Header />
      <S.BoxShadowWarpper>
        <S.ChatList>
          {data &&
            data.map((el: MockDataType, index: number) => {
              return (
                <S.Message
                  key={index}
                  userId={el.userId}
                  loginUser={user.userId}
                >
                  <Chat data={el} index={index} onDelete={onDelete} />
                </S.Message>
              );
            })}
        </S.ChatList>
      </S.BoxShadowWarpper>
      <Input />
    </S.MessengerContainer>
  );
};

export default Messenger;
