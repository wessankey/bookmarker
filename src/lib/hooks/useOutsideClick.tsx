import { useEffect, useRef } from "react";

// https://stackoverflow.com/a/71193834
function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error("Node expected");
  }
}

export const useOutsideClick = ({ callback }: { callback: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      assertIsNode(event.target);

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [callback, ref]);

  return ref;
};
