import * as S from "Components/Balloon/style.Balloon";
import { RootState } from 'src/Redux/index.Redux';
import { useSelector } from 'react-redux';

interface BalloonProps {
  content: string,
  userId: string,
  loginUser: string,
}

// const BallonPropsDummy :BalloonProps = {
//   content : "달볓 옅구름 미쁘다 함초롱하다 이플 비나리 도서 나래 옅구름 달볓 미쁘다 도서관 달볓 함초롱하다 여우별 도르레 가온해 이플 다솜 안녕 책방 달볓 별빛 여우별 별하 늘품 예그리나 산들림 비나리 소록소록 포도 도서관 바람꽃 곰다시 나래 도르레 나래 도서관 달볓 소록소록 소솜 나래 미쁘다 로운 감사합니다 그루잠 아름드리 사과 별빛 소솜.",
//   background : "ㅋㅋㅋ"
// }

const Balloon = ({ content, userId, loginUser }: BalloonProps) => {

  const user = useSelector((state: RootState) => state.user);

  return (
    <S.BalloonContainer >
      <S.Container userId={userId} loginUser={loginUser}>
        <p>{content}</p>
      </S.Container>
    </S.BalloonContainer>
  );
};

export default Balloon;