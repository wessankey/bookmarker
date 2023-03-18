import { useEffect, useRef } from "react";

type TAddToCollectionMenuProps = {
  collections: { id: string; name: string; containsBookmark: boolean }[];
  isOpen: boolean;
  onClickOutside: () => void;
  onAddBookmark: (collectionId: string) => void;
};

export const AddToCollectionMenu = ({
  collections,
  isOpen,
  onClickOutside,
  onAddBookmark,
}: TAddToCollectionMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return (
    <div
      ref={ref}
      className="bg-white border border-grey-medium rounded-md py-1 px-1 w-48 shadow-md"
    >
      <ul>
        {collections.map((s) => {
          return (
            <li
              key={s.id}
              className={`text-sm hover:bg-grey-light hover:cursor-pointer rounded-md py-1 px-3 
                         ${
                           s.containsBookmark &&
                           "text-grey-medium hover:cursor-not-allowed hover:bg-white"
                         }`}
              onClick={() => onAddBookmark(s.id)}
            >
              {s.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
