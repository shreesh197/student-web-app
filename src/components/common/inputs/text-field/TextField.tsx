import { DeviceContext } from "app-repo-common-pkg";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { getCapitalizedString, getValidationErrMsg } from "../../../../helper";

const TextField = (props: any) => {
  const {
    labelText,
    value,
    additionalClassName,
    placeholder,
    type,
    onChange,
    ...rest
  } = props;
  return (
    <div className="text-fields">
      <span className="profile-label">{labelText}</span>
      <input
        value={value}
        className={`profile-input ${
          additionalClassName ? additionalClassName : ""
        }`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextField;
