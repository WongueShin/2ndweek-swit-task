import * as S from "Components/Button/style.Button";

interface ButtonProps {
  userName: string;
}

const ButtonPropsDummy = {
  userName : "사람3"
}

// const Button = ({ userName }: ButtonProps) => {
const Button = () => {
  return (
    <S.ButtonContainer>
      <S.Btn>
        <span>답장</span> {/* 아이콘 */}
      </S.Btn>
      {ButtonPropsDummy.userName === "사람3" && (
        <S.Btn>
          <span>삭제</span> {/* 아이콘 */}
        </S.Btn>
      )}
    </S.ButtonContainer>
  );
};

export default Button;