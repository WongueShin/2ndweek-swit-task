import * as S from "Components/Messenger/style.Messenger";
import React, { useState } from "react";
import Chat from "Components/Chat/index.Chat";
import Input from "Components/Input/index.Input";
import { messageJson } from "Components/Messenger/data";
import { dataType } from "src/types/dataType";

const Messenger = (): JSX.Element => {
  const [data, setData] = useState<dataType[]>(messageJson);
  console.log(data);
  return (
    <>
      <S.MessengerContainer>
        {data &&
          data.map((el) => {
            return (
              <S.Message>
                <Chat data={el} />
              </S.Message>
            );
          })}
      </S.MessengerContainer>
      <Input/>
    </>
  );
};

export default Messenger;
