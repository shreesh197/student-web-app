import { DatePicker, DatePickerProps } from "antd";

const DatePickerComp = ({
  value,
  labelText,
  additionalClassName,
  placeholder,
  onChange,
}: {
  value: string;
  labelText: string;
  placeholder: string;
  additionalClassName: string;
  onChange: any;
}) => {
  return (
    <div className="text-fields">
      <span className="profile-label">{labelText}</span>
      <DatePicker
        // value={value}
        placeholder={placeholder}
        className={`profile-input ${
          additionalClassName ? additionalClassName : ""
        }`}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickerComp;
