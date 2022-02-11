import * as S from 'Components/Balloon/style.Balloon';
import { UserIdType } from 'src/Types/type';

interface BalloonProps extends UserIdType {
  content: string;
  isDel: boolean;
}

const Balloon = ({ content, userId, loginUser, isDel }: BalloonProps) => {
  return (
    <S.BalloonContainer>
      <S.Container userId={userId} loginUser={loginUser}>
        {isDel === true ? <p>삭제된 메세지 입니다</p> : <p>{content}</p>}
      </S.Container>
    </S.BalloonContainer>
  );
};

export default Balloon;
