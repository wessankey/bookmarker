import { TTag } from "./types";

type TTagProps = {
  tag: TTag;
};

export const Tag = ({ tag }: TTagProps) => {
  return (
    <div
      style={{ backgroundColor: tag.color }}
      className={`px-2 py-1 text-xs uppercase rounded-sm 
      text-white font-bold cursor-pointer inline-block`}
    >
      {tag.value}
    </div>
  );
};
