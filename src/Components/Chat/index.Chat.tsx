import React from 'react';
import Balloon from 'Components/Balloon/index.Balloon';
import UserProfile from 'Components/UserProfile/index.UserProfile';
import Button from 'Components/Button/index.Button';
import * as S from 'Components/Chat/style.Chat';
import { MockDataType } from 'src/Types/type';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux/index.Redux';

interface ChatPropsType {
  data: MockDataType;
}

const Chat = ({ data }: ChatPropsType): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <S.ChatWarpper>
      {data.userId === user.userId ? (
        <>
          <Button userId={data.userId} loginUser={user.userId}/>
          <S.BalloonWarpper>
            <Balloon content={data.content} userId={data.userId} loginUser={user.userId}/>
          </S.BalloonWarpper>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
        </>
      ) : (
        <>
          {' '}
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
          <S.BalloonWarpper>
            <Balloon content={data.content} userId={data.userId} loginUser={user.userId}/>
          </S.BalloonWarpper>
          <Button userId={data.userId} loginUser={user.userId}/>
        </>
      )}
    </S.ChatWarpper>
  );
};

export default Chat;
