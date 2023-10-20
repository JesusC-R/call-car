"use client";

import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({ text, containerStyles, handleClick, btnType }) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`${containerStyles} custom-btn`}
      onClick={handleClick}
    >
      <span className="flex-1">
        {text}
      </span>
    </button>
  );
}

export default CustomButton;
