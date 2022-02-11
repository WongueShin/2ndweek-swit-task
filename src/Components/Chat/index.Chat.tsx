import React from 'react';
import Balloon from 'Components/Balloon/index.Balloon';
import UserProfile from 'Components/UserProfile/index.UserProfile';
import Button from 'Components/Button/index.Button';
import * as S from 'Components/Chat/style.Chat';
import { dataType } from 'src/types/dataType';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux/index.Redux';

interface ChatPropsType {
  data: dataType;
}

const Chat = ({ data }: ChatPropsType): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <S.ChatWarpper>
      {data.userId === user.userId ? (
        <>
          <Button userName={data.userName} />
          <S.BalloonWarpper>
            <Balloon content={data.content} userName={data.userName} />
          </S.BalloonWarpper>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
        </>
      ) : (
        <>
          {' '}
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
          <S.BalloonWarpper>
            <Balloon content={data.content} userName={data.userName} />
          </S.BalloonWarpper>
          <Button userName={data.userName} />
        </>
      )}
    </S.ChatWarpper>
  );
};

export default Chat;
