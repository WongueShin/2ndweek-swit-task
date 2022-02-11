import React from "react";
import Balloon from "Components/Messenger/Balloon/index.Balloon";
import UserProfile from "Components/UserProfile/index.UserProfile";
import Button from "Components/Messenger/Button/index.Button";
import * as S from "Components/Messenger/Chat/style.Chat";
import { MockDataType } from "src/Types/type";
import { useSelector } from "react-redux";
import { RootState } from "src/Redux/index.Redux";

interface ChatPropsType {
  data: MockDataType;
  setReply: React.Dispatch<React.SetStateAction<string>>;
  onDelete(index: number): void;
  index: number;
}

const Chat = ({
  data,
  setReply,
  onDelete,
  index,
}: ChatPropsType): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <S.ChatWarpper userId={data.userId} loginUser={user.userId}>
      {data.userId === user.userId ? (
        <>
          {data.isDel === true ? null : (
            <>
              <Button
                setReply={setReply}
                data={data}
                loginUser={user.userId}
                index={index}
                onDelete={onDelete}
              />
            </>
          )}
          <S.BalloonWarpper>
            <Balloon data={data} loginUser={user.userId} />
          </S.BalloonWarpper>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
        </>
      ) : (
        <>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
          <S.BalloonWarpper>
            <Balloon data={data} loginUser={user.userId} />
          </S.BalloonWarpper>
          {data.isDel === true ? null : (
            <>
              <Button
                setReply={setReply}
                data={data}
                loginUser={user.userId}
                index={index}
                onDelete={onDelete}
              />
            </>
          )}
        </>
      )}
    </S.ChatWarpper>
  );
};

export default Chat;
