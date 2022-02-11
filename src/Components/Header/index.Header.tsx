import React from 'react';
import { messageJson } from 'Components/Messenger/data';
import * as S from 'Components/Header/style.Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const userIdArr: Array<string> = [];
  messageJson.map(el => {
    return userIdArr.push(el.userId);
  });
  let filterUserIdArr = userIdArr.filter(
    (el, idx) => userIdArr.indexOf(el) === idx
  );

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>
        <S.ChatName>독서모임</S.ChatName>
        <S.ChatUserCount>({filterUserIdArr.length})</S.ChatUserCount>
      </S.HeaderTitle>
      <S.HeaderSettingBtn
        onClick={() => window.alert('데모버전에서는 지원하지않는 기능입니다.')}
      >
        <FontAwesomeIcon icon={faGear} size="1x" />
      </S.HeaderSettingBtn>
    </S.HeaderContainer>
  );
};

export default Header;
