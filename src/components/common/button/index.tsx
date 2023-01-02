import React from "react";

const FormButton = ({
  hintText,
  onClick,
  bgColor,
}: {
  hintText: string;
  onClick: any;
  bgColor: string;
}) => {
  return (
    <button onClick={onClick} style={{ background: bgColor }}>
      {hintText}
    </button>
  );
};

export default FormButton;
