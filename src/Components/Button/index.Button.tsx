import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as S from 'Components/Button/style.Button';
import { MockDataType } from 'src/Types/type';

interface ButtonPropsType {
  data: MockDataType;
  loginUser:string;
  setReply:React.Dispatch<React.SetStateAction<string>>;
  onDelete(index: number): void;
  index: number;
}

const Button = ({ data, setReply, loginUser, onDelete, index }: ButtonPropsType) => {

const handleReply = (data :MockDataType):void => {
  const newState = `${data.userName}\n${data.content}\n`
  setReply(newState);
}

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
      <S.Btn onClick={()=>{handleReply(data)}} >
        <FontAwesomeIcon icon={faAngleRight} />
      </S.Btn>
    </S.ButtonContainer>
  );
};

export default Button;
