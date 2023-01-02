import React from "react";

const TextAreaField = ({
  value,
  labelText,
  onChange,
  placeholder,
  additionalClassName,
}: {
  value: string;
  labelText: string;
  onChange: any;
  placeholder: string;
  additionalClassName: string;
}) => {
  return (
    <div>
      <span className="profile-label">{labelText}</span>
      <textarea
        value={value}
        className={`profile-input ${
          additionalClassName ? additionalClassName : ""
        }`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaField;
