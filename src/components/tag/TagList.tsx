import { Tag } from "./Tag";
import { TTag } from "./types";

type TTagListProps = {
  tags: TTag[];
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
