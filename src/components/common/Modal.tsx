import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactDOM from "react-dom";

export const Modal = ({
  title,
  open,
  onClose,
  body,
  footer,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed w-full h-full top-0 right-0 bottom-0 left-0 bg-[#000]/[.45] z-30">
        <div
          className="w-[40rem] mh-[15rem] bg-[#fff] translate-x-[-50%] translate-y-[-50%] z-40 fixed top-1/2 left-1/2
          rounded-md shadow-lg"
        >
          <div className="flex justify-between border-b border-[#DDD] p-7">
            <h2 className="text-xl">{title}</h2>
            <XMarkIcon
              className="h-5 w-5 stroke-[#999] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="px-7 py-4">{body}</div>
          <div className="px-7 py-4 border-t border-[#DDD]">{footer}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-portal")!
  );
};
