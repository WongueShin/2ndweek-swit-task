import {
  useState,
  ChangeEvent,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';

function useInput<T>(
  initalValue: T
): [
  T,
  Dispatch<SetStateAction<T>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [value, setValue] = useState<typeof initalValue>(initalValue);
  const handle = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, handle];
}

export default useInput;
