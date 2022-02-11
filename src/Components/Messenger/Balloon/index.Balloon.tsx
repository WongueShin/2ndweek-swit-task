import * as S from "Components/Messenger/Balloon/style.Balloon";
import { MockDataType } from "src/Types/type";
import Button from "Components/Messenger/Button/index.Button";

interface BalloonProps {
  data: MockDataType;
  loginUser: string;
  setReply: React.Dispatch<React.SetStateAction<string>>;
  onDelete(index: number): void;
  index: number;
}

const Balloon = ({
  data,
  loginUser,
  setReply,
  onDelete,
  index,
}: BalloonProps) => {
  return (
    <S.BalloonContainer userId={data.userId} loginUser={loginUser}>
      <S.Header userId={data.userId} loginUser={loginUser}>
        {data.userName}
        {data.userId === loginUser && <span> * </span>}&nbsp;{data.date}
      </S.Header>
        {
          data.userId !== loginUser ? <S.BodyContainer>
          <S.Body userId={data.userId} loginUser={loginUser}>
            {data.isDel ? <p>삭제된 메세지 입니다</p> : <pre>{data.content}</pre>}
          </S.Body>
          <Button
            setReply={setReply}
            data={data}
            loginUser={loginUser}
            index={index}
            onDelete={onDelete}
          />
        </S.BodyContainer> : <S.BodyContainer>
        <Button
          setReply={setReply}
          data={data}
          loginUser={loginUser}
          index={index}
          onDelete={onDelete}
        />
        <S.Body userId={data.userId} loginUser={loginUser}>
          {data.isDel ? <p>삭제된 메세지 입니다</p> : <pre>{data.content}</pre>}
        </S.Body>
      </S.BodyContainer>
        }
    </S.BalloonContainer>
  );
};

export default Balloon;
