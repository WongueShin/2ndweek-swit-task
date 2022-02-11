import * as S from "Components/Balloon/style.Balloon";
import { UserIdType } from 'src/Types/type';

interface BalloonProps extends UserIdType {
  content: string
}

const Balloon = ({ content, userId, loginUser }: BalloonProps) => {

  return (
    <S.BalloonContainer >
      <S.Container userId={userId} loginUser={loginUser}>
        <p>{content}</p>
      </S.Container>
    </S.BalloonContainer>
  );
};

export default Balloon;