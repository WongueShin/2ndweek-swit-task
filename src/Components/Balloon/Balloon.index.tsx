import * as S from "Components/Balloon/Balloon.style";
import { BalloonProps } from "Components/Main/index.Main";

const Balloon = ({ content, background }: BalloonProps) => {
  return (
    <S.BalloonContainer >
      <S.Container background={background}>
        <p>{content}</p>
      </S.Container>
    </S.BalloonContainer>
  );
};

export default Balloon;
