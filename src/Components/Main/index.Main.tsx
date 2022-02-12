import Login from "Components/Login/index.Login";
import Messenger from "Components/Messenger/index.Messenger";
import * as S from "Components/Main/style.Main";
import TopBar from "Components/TopBar/index.TopBar";

const Main = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <S.MainContainer>
        <Login />
        <Messenger />
      </S.MainContainer>
    </>
  );
};

export default Main;
