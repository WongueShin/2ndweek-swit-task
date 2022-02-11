import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as S from 'Components/Button/style.Button';
import { UserIdType } from 'src/Types/type';

interface ButtonPropsType extends UserIdType {
  onDelete(index: number): void;
  index: number;
}

const Button = ({ userId, loginUser, onDelete, index }: ButtonPropsType) => {
  return (
    <S.ButtonContainer>
      {userId === loginUser && (
        <S.Btn
          onClick={() => {
            onDelete(index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </S.Btn>
      )}
      <S.Btn>
        <FontAwesomeIcon icon={faAngleRight} />
      </S.Btn>
    </S.ButtonContainer>
  );
};

export default Button;
