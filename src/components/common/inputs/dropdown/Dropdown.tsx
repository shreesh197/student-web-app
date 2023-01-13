import React from "react";
import { Select } from "antd";

interface ListObj {
  value: string;
  label: string;
}

type ListType = ListObj[];

const DropDown = ({
  list,
  labelText,
  additionalClassName,
}: {
  list: ListType;
  labelText: string;
  additionalClassName: string;
}) => {
  return (
    <div className="text-fields">
      <span className="profile-label">{labelText}</span>
      <Select
        className={`profile-input ${
          additionalClassName ? additionalClassName : ""
        }`}
        showSearch
        // style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={list}
      />
    </div>
  );
};

export default DropDown;
