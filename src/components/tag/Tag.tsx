import { TagFragmentFragment } from "../../../gql/graphql";

type TTagProps = {
  tag: TagFragmentFragment;
};

export const Tag = ({ tag }: TTagProps) => {
  return (
    <div
      style={{ backgroundColor: tag.tagColor }}
      className={`px-2 py-1 text-xs uppercase rounded-sm 
      text-white font-bold cursor-pointer inline-block`}
    >
      {tag.value}
    </div>
  );
};
