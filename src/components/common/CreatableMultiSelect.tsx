import { OnChangeValue } from "react-select";
import CreatableSelect from "react-select/creatable";

interface Option {
  label: string;
  value: string;
}

type TCreatableMultiSelect = {
  id: string;
  label: string;
  options: Option[];
  value: Option[];
  onChange: (values: string[]) => void;
};

const CreatableMultiSelect = ({
  id,
  label,
  options,
  value,
  onChange,
}: TCreatableMultiSelect) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <CreatableSelect
        id={id}
        isMulti
        value={value}
        options={options}
        onChange={(e: OnChangeValue<Option, true>) => {
          onChange(e.map((item) => item.value));
        }}
      />
    </>
  );
};

export default CreatableMultiSelect;
