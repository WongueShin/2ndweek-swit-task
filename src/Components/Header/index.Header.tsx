import React from 'react';
import { messageJson } from 'Components/Messenger/data';
import * as S from 'Components/Header/style.Header';
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
      <S.HeaderContent>
        <S.ChatName>독서모임</S.ChatName>
        <S.ChatUserCount>({filterUserIdArr.length})</S.ChatUserCount>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
