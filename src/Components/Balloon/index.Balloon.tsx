import * as S from "Components/Balloon/style.Balloon";
import { MockDataType } from 'src/Types/type';

interface BallonPropsType {
  data: MockDataType;
  loginUser: string;
}

const Balloon = ({ data , loginUser }:BallonPropsType) => {

  return (
    <S.BalloonContainer >
      <S.Header userId={data.userId} loginUser={loginUser}>{data.userName}{data.userId === loginUser && <span> * </span>}&nbsp;{ data.date}</S.Header>
      <S.Body userId={data.userId} loginUser={loginUser}>
        <p>{data.content}</p>
      </S.Body>
    </S.BalloonContainer>
  );
};

export default Balloon;