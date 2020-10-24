import { useCallback, useState } from 'react';

export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  return {
    value,
    setValue,
    bind: {
      value,
      onChange,
    },
  };
};
