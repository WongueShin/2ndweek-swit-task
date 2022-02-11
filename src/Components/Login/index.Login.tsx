import React, { useState, ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/index.Redux';
import { onLogin, onLogout } from '../../Redux/user.Redux';
import * as S from 'Components/Login/style.Login';
//import useInput from 'src/Hooks/useInput';
const Login = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [userNameInput, setUserNameInput] = useState<string>('');
  //const [userNameInput, onChangeUserName] = useInput<string>('');
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(e.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userNameInput.length === 0) {
      window.alert('이름을 입력해주세요');
      return;
    }
    if (userNameInput.length >= 12) {
      window.alert('12자 미만으로 입력해주세요');
      return;
    }
    dispatch(onLogin({ userName: userNameInput }));
    setUserNameInput('');
  };

  const onLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(onLogout());
  };

  return (
    <>
      {user.isLogin === false ? (
        <>
          <S.LoginBackground>
            <S.LoginContainer>
              <S.LoginInfoSpan>
                로그인 후 대화에 참여할 수 있습니다.
              </S.LoginInfoSpan>
              <S.LoginForm onSubmit={handleOnSubmit}>
                <S.NameInput
                  name="userNameInput"
                  value={userNameInput}
                  onChange={onChangeUserName}
                  placeholder="이름을 입력하세요"
                />
                <S.LoginLogoutButton type="submit">로그인</S.LoginLogoutButton>
              </S.LoginForm>
            </S.LoginContainer>
          </S.LoginBackground>
        </>
      ) : (
        <>
          <S.LogoutContainer>
            <S.LoginLogoutButton onClick={onLogoutClick}>
              로그아웃
            </S.LoginLogoutButton>
          </S.LogoutContainer>
        </>
      )}
    </>
  );
};

export default Login;
