import { useState, useEffect } from 'react';

export function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key) || initialValue));

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
