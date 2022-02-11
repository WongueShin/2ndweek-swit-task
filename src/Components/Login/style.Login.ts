import styled from 'styled-components';

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 30px;
  width: 500px;
  margin-bottom: 10px;
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

export const LoginBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  z-index: 700;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  margin: 0 auto;
  border-radius: 5px;
  height: 200px;
  width: 400px;
`;

export const LoginInfoSpan = styled.span`
  font-size: 16px;
  line-height: 100%;
  margin-top: 54px;
  margin-bottom: 20px;
`;
export const LoginForm = styled.form`
  margin: 0 auto;
`;
