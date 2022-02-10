import React from "react";
import Balloon from "Components/Balloon/index.Balloon";
import UserProfile from "Components/UserProfile/index.UserProfile";
import Button from "Components/Button/index.Button";
import * as S from "Components/Chat/style.Chat";
import { dataType } from "src/types/dataType";

interface ChatPropsType {
  data: dataType;
}

const Chat = ({ data }: ChatPropsType): JSX.Element => {
  return (
    <S.ChatWarpper>
      {data.userName === "사람3" ? (
        <>
          <Button userName={data.userName}/>
          <S.BalloonWarpper>
            <Balloon content={data.content} userName={data.userName} />
          </S.BalloonWarpper>
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
        </>
      ) : (
        <>
          {" "}
          <UserProfile USER_PROFLE_PATH={data.profileImage} />
          <S.BalloonWarpper>
            <Balloon content={data.content} userName={data.userName} />
          </S.BalloonWarpper>
          <Button userName={data.userName}/>
        </>
      )}
    </S.ChatWarpper>
  );
};

export default Chat;
