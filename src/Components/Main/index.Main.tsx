import Login from 'Components/Login/index.Login';
import Messenger from 'Components/Messenger/index.Messenger';
import Nav from 'Components/Nav/indes.Nav';
import * as S from 'Components/Main/style.Main';

const Main = (): JSX.Element => {
  return (
    <S.MainContainer>
      <Nav/>
      <Login />
      <Messenger />
    </S.MainContainer>
  );
};

export default Main;
