import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 0px;
  width: 500px;
  box-shadow: inset 0 -7px 9px -7px rgba(0, 0, 0, 0.1);
  //box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.1);
`;

export const ChatName = styled.span`
  display: inline-block;
  font-size: 24px;
  line-height: 100%;
  font-weight: 500;
  vertical-align: bottom;
  margin-left: 14px;
`;
export const ChatUserCount = styled.span`
  display: inline-block;
  font-size: 16px;
  line-height: 100%;
  vertical-align: bottom;
  padding-bottom: 3px;
  color: gray;
`;

export const HeaderTitle = styled.div``;
export const HeaderSettingBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 16px;
  background: #f5f5f5;
  border: none;
  :hover {
    background-color: #f0eded;
  }
`;
