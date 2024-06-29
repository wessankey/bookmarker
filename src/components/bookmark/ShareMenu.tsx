import Link from "next/link";
import { useEffect, useRef } from "react";
import { ExternalServiceType } from "../../../gql/graphql";

type TShareMenuProps = {
  bookmarkId: string;
  services: ExternalServiceType[];
  isOpen: boolean;
  onClickOutside: () => void;
  onShareToExternalService: (
    bookmarkId: string,
    externalService: ExternalServiceType
  ) => void;
};

export const ShareMenu = ({
  bookmarkId,
  services,
  isOpen,
  onClickOutside,
  onShareToExternalService,
}: TShareMenuProps) => {
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

  if (services.length === 0) {
    return (
      <div
        ref={ref}
        className="bg-white border border-grey-medium rounded-md py-4 px-1 w-48 shadow-md text-center"
      >
        <p>No external sharing services configured</p>
        <Link
          className="btn btn-primary btn-sm normal-case mt-3"
          href="/settings"
        >
          Configure
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="bg-white border border-grey-medium rounded-md py-1 px-1 w-48 shadow-md"
    >
      <ul>
        {services.map((s) => {
          return (
            <li
              key={s}
              className="text-sm hover:bg-grey-light hover:cursor-pointer rounded-md py-1 px-3"
              onClick={() => onShareToExternalService(bookmarkId, s)}
            >
              {s}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
