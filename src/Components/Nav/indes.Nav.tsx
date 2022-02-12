import React from "react";
import * as S from "Components/Nav/style.Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faUser, faBookOpen, faBarsStaggered, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';

const handleOnClick = ():void => {
    alert("데모버전에서는 지원하지않는 기능입니다.")
}

const Nav = ():JSX.Element => {
    return(
        <S.NavContainer>
            <S.LogoContainer>
                <S.LogoDiv/>
            </S.LogoContainer>
            <S.IconList>
                <S.IconContainer onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faTableColumns}/>
                </S.IconContainer>
                <S.IconContainer onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faUser}/>
                </S.IconContainer>
                <S.IconContainer onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faBookOpen}/>
                </S.IconContainer>
                <S.IconContainer onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faBarsStaggered}/>
                </S.IconContainer>
                <S.SelectedContainer>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </S.SelectedContainer>
                <S.IconContainer onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faGear}/>
                </S.IconContainer>
            </S.IconList>
        </S.NavContainer>
    )
}

export default Nav;