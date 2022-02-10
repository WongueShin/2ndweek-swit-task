import React, { useState } from 'react';
import { messageJson } from 'src/Messenger/data';
import { dataType } from 'src/types/dataType';

const Messenger = (): JSX.Element => {
  const [data, setData] = useState<dataType[]>(messageJson);
  console.log(data);
  return <></>;
};

export default Messenger;
