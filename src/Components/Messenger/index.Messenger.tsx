import * as S from 'Components/Messenger/style.Messenger';
import React, { useEffect, useState } from 'react';
import Chat from 'Components/Chat/index.Chat';
import { useSelector } from 'react-redux';
import { messageJson } from 'Components/Messenger/data';
import { dataType } from 'src/types/dataType';
import { RootState } from 'src/Redux/index.Redux';
import Input from 'Components/Input/index.Input';

const Messenger = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  let messageJsonCopy = JSON.parse(JSON.stringify(messageJson));
  const [data, setData] = useState<dataType[]>(messageJsonCopy);

  useEffect(() => {
    let tmpData: dataType[] = [...data];
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
  return (
    <>
      <S.MessengerContainer>
        {data &&
          data.map(el => {
            return (
              <S.Message>
                <Chat data={el} />
              </S.Message>
            );
          })}
      </S.MessengerContainer>
      <Input />
    </>
  );
};

export default Messenger;
