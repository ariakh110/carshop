import { MouseEventHandler, SetStateAction, useState } from "react";

export interface CustomButtonProps {
  name?: string | undefined;
  isActive: boolean;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classStyle: string;
  title: string | undefined;
}
export interface CustomFilterProps {
  title: string | undefined;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  // setManufacturer: React.Dispatch<SetStateAction<string>>;
  setManufacturer: (manufacturer: string) => void;
}
