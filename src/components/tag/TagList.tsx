import { TagFragmentFragment } from "../../../gql/graphql";
import { Tag } from "./Tag";

type TTagListProps = {
  tags: TagFragmentFragment[];
};

export const TagList = ({ tags }: TTagListProps) => {
  return (
    <div className="flex">
      {tags.map((tag) => {
        return (
          <div key={tag.id} className="mr-2">
            <Tag tag={tag} />
          </div>
        );
      })}
    </div>
  );
};
