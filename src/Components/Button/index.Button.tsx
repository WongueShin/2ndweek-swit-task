import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faAngleRight}/> {/* 아이콘 */}
      </S.Btn>
      {ButtonPropsDummy.userName === "사람3" && (
        <S.Btn>
          <FontAwesomeIcon icon={faTrashCan}/> {/* 아이콘 */}
        </S.Btn>
      )}
    </S.ButtonContainer>
  );
};

export default Button;
