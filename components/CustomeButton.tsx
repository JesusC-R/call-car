"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles} custom-btn`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
