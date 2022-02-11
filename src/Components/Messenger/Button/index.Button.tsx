import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as S from 'Components/Messenger/Button/style.Button';
import { MockDataType } from 'src/Types/type';

interface ButtonPropsType {
  data: MockDataType;
  loginUser:string;
  setReply:React.Dispatch<React.SetStateAction<number>>;
  onDelete(index: number): void;
  index: number;
}

const Button = ({ data, setReply, loginUser, onDelete, index }: ButtonPropsType) => {

  

  return (
    <S.ButtonContainer>
      {data.userId === loginUser && (
        <S.Btn
          onClick={() => {
            onDelete(index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </S.Btn>
      )}
      <S.Btn onClick={()=>{setReply(index)}} >
        <FontAwesomeIcon icon={faAngleRight} />
      </S.Btn>
    </S.ButtonContainer>
  );
};

export default Button;
