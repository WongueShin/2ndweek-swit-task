import React from "react";
import Balloon from "Components/Balloon/index.Balloon";
import UserProfile from "Components/UserProfile/index.UserProfile";
import Button from "Components/Button/index.Button";
import * as S from "Components/Chat/style.Chat";

const Chat = ():JSX.Element => {
    return(
        <S.ChatWarpper>
            <UserProfile/>
            <S.BalloonWarpper>
                <Balloon/>
            </S.BalloonWarpper>
            <Button/>
        </S.ChatWarpper>
    )
}

export default Chat;