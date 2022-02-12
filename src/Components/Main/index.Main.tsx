import Login from 'Components/Login/index.Login';
import Messenger from 'Components/Messenger/index.Messenger';
import * as S from 'Components/Main/style.Main';

const Main = (): JSX.Element => {
  return (
    <S.MainContainer>
      <Login />
      <Messenger />
    </S.MainContainer>
  );
};

export default Main;
