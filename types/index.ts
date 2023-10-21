import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  text: string;
  btnType: "button" | "submit" | "reset";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
