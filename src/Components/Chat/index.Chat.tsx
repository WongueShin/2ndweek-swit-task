import React from "react";
import Balloon from "Components/Balloon/index.Balloon";
import UserProfile from "Components/UserProfile/index.UserProfile";
import * as S from "Components/Chat/style.Chat";
import { dataType } from 'src/types/dataType';


const Chat = ({data} :any) :JSX.Element => {

    return(
        <S.ChatWarpper>
            <UserProfile USER_PROFLE_PATH={data.profileImage}/>
            <S.BalloonWarpper>
                <Balloon content={data.content} background={data.userName}/>
            </S.BalloonWarpper>
        </S.ChatWarpper>
    )
}

export default Chat;