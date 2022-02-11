import React, { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/index.Redux';
import { onLogin, onLogout } from '../../Redux/user.Redux';
const Login = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [userNameInput, setUserNameInput] = useState<string>('');

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(e.target.value);
  };
  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(onLogin({ userName: userNameInput }));
  };

  const onLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(onLogout());
  };

  return (
    <>
      <span>이름 : </span>
      <input
        name="userNameInput"
        value={userNameInput}
        onChange={onChangeUserName}
      />
      <button onClick={onSubmit}>로그인</button>
      <button onClick={onLogoutClick}>로그아웃</button>
    </>
  );
};

export default Login;
