import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { MockDataType } from 'src/Types/type';
import * as S from "Components/Button/style.Button";

interface UserIdType {
  data: MockDataType;
  loginUser:string;
  setReply:React.Dispatch<React.SetStateAction<string>>;
}

const Button = ({ data,loginUser,setReply }: UserIdType) => {

  const handleReply = (data :MockDataType):void => {
    const newState = `${data.userName}\n${data.content}\n`
    setReply(newState);
  }

  return (
    <S.ButtonContainer>
      {data.userId === loginUser && (
        <S.Btn>
          <FontAwesomeIcon icon={faTrashCan}/>
        </S.Btn>
      )}
      <S.Btn>
      <FontAwesomeIcon onClick={()=>{handleReply(data)}} icon={faAngleRight}/>
    </S.Btn>
    </S.ButtonContainer>
  );
};

export default Button;
