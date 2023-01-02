import { getCapitalizedString } from "../../../../helper";

const RadioButton = ({
  value,
  checked,
  onChange,
  customClass,
}: {
  value: string;
  checked: boolean;
  onChange: any;
  customClass: string;
}) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={value} className={customClass}>
        {getCapitalizedString(value)}
      </label>
    </>
  );
};

export default RadioButton;
