import Select, { OnChangeValue } from "react-select";

export interface Option {
  readonly label: string;
  readonly value: string;
}

type TBookmarkToolbarProps = {
  allTags: string[];
  selectedTag: string | undefined;
  onTagFilterChange: (tag: string | undefined) => void;
};

export const BookmarkToolbar = ({
  allTags,
  selectedTag,
  onTagFilterChange,
}: TBookmarkToolbarProps) => {
  return (
    <TagSelect
      allTags={allTags}
      selectedTag={selectedTag}
      onTagFilterChange={onTagFilterChange}
    />
  );
};

type TTagSelectProps = Pick<
  TBookmarkToolbarProps,
  "allTags" | "selectedTag" | "onTagFilterChange"
>;

const TagSelect = ({
  allTags,
  selectedTag,
  onTagFilterChange,
}: TTagSelectProps) => {
  const allTagOptions = allTags.map((tag) => ({ label: tag, value: tag }));

  const handleSelectTag = (selectedOption: OnChangeValue<Option, false>) => {
    if (!!selectedOption?.value) onTagFilterChange(selectedOption.value);
    else onTagFilterChange(undefined);
  };

  const selectedOption = selectedTag
    ? { label: selectedTag, value: selectedTag }
    : undefined;

  return (
    <Select
      isClearable
      options={allTagOptions}
      value={selectedOption}
      onChange={handleSelectTag}
      placeholder="Select a tag"
      className="w-80"
    />
  );
};
