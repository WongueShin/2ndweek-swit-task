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
  setReply:React.Dispatch<React.SetStateAction<string>>;
}

const Chat = ({ data,setReply }: ChatPropsType): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <S.ChatWarpper userId={data.userId} loginUser={user.userId}>
      {data.userId === user.userId ? (
        <>
          <Button setReply={setReply} data={data} loginUser={user.userId}/>
          <S.BalloonWarpper>
            <Balloon data={data} loginUser={user.userId}/>
          </S.BalloonWarpper>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
        </>
      ) : (
        <>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
          <S.BalloonWarpper>
            <Balloon data={data} loginUser={user.userId}/>
          </S.BalloonWarpper>
          <Button setReply={setReply} data={data} loginUser={user.userId}/>
        </>
      )}
    </S.ChatWarpper>
  );
};

export default Chat;
