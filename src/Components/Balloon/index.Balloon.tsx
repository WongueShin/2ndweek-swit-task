import * as S from 'Components/Balloon/style.Balloon';
import { MockDataType } from './../../Types/type';

interface BalloonProps {
  data: MockDataType;
  loginUser: string;
}

const Balloon = ({ data, loginUser }: BalloonProps) => {
  return (
    <S.BalloonContainer>
      <S.Header userId={data.userId} loginUser={loginUser}>{data.userName}{data.userId === loginUser && <span> * </span>}&nbsp;{ data.date}</S.Header>
      <S.Body userId={data.userId} loginUser={loginUser}>
        {data.isDel === true ? <p>삭제된 메세지 입니다</p> : <pre>{data.content}</pre>}
        </S.Body>
    </S.BalloonContainer>
  );
};

export default Balloon;
