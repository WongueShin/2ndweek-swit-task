import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 30px;
  width: 500px;
`;
export const NameInput = styled.input`
  height: 28px;
  background-color: #e6e6ee;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const LoginLogoutButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #57b785;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  box-shadow: 1px 3px 0 rgb(0, 0, 0, 0.5);
  &:hover {
    background-color: #46b37a;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;
export const LoginForm = styled.form``;
