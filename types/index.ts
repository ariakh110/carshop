import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  name?: string | undefined;
  isActive: boolean;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classStyle: string;
  title: string | undefined;
}
