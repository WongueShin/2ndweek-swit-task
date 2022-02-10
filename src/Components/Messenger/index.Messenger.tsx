import React, { useState } from 'react';
import Chat from 'Components/Chat/index.Chat';
import { messageJson } from 'Components/Messenger/data';
import { dataType } from 'src/types/dataType';

const Messenger = (): JSX.Element => {
  const [data, setData] = useState<dataType[]>(messageJson);
  console.log(data);
  return (<>
    <Chat/>
  </>);
};

export default Messenger;
