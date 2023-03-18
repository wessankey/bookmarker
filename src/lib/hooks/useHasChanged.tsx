import { useEffect, useRef } from "react";

export const useHasChanged = <T,>(value: T) => {
  const prevVal = usePrevious(value);
  return value !== prevVal;
};

const usePrevious = <T,>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
