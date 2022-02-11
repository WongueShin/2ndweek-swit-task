import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "Components/Button/style.Button";
import { UserIdType } from "src/Types/type";

const Button = ({ userId,loginUser }: UserIdType) => {
  return (
    <S.ButtonContainer>
      {userId === loginUser && (
        <S.Btn>
          <FontAwesomeIcon icon={faTrashCan}/>
        </S.Btn>
      )}
      <S.Btn>
      <FontAwesomeIcon icon={faAngleRight}/>
    </S.Btn>
    </S.ButtonContainer>
  );
};

export default Button;
