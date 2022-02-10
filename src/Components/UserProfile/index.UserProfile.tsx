import React from "react";
import * as S from  "Components/UserProfile/style.UserProfile";
import * as C from  "Const/Constant";

interface UserProFileProps{
    USER_PROFLE_PATH : string
}

const USER_PROFLE_PATH = C.USER_PROFILE_PATH.ID_926931d2;



const UserProfile = (/*{USER_PROFLE_PATH}:UserProFileProps*/):JSX.Element => {
    return(
        <S.ProfileWarrper>{
            USER_PROFLE_PATH === C.USER?
            <S.ProfileImg ProFilePath={USER_PROFLE_PATH}/>:
            <></>
        }
        </S.ProfileWarrper>
    )
}

export default UserProfile