import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "Components/Button/style.Button";

interface ButtonProps {
  userName: string;
}


const Button = ({ userName }: ButtonProps) => {
  return (
    <S.ButtonContainer>
      <S.Btn>
        <FontAwesomeIcon icon={faAngleRight}/>
      </S.Btn>
      {userName === "사람3" && (
        <S.Btn>
          <FontAwesomeIcon icon={faTrashCan}/>
        </S.Btn>
      )}
    </S.ButtonContainer>
  );
};

export default Button;
