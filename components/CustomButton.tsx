"use client";
import { randomUUID } from "crypto";
import React from "react";
type ButtonProps = {
  name?: string | undefined;
  isActive: boolean;
  type: "button" | "submit";
  onClick: Function;
  classStyle: string;
  title: string | undefined;
};
function Hero({
  name = `Button` + randomUUID,
  isActive,
  type,
  onClick,
  classStyle,
  title = "Button Name",
}: ButtonProps) {
  return (
    <button
      name={name}
      disabled={isActive}
      type={type}
      onClick={onClick}
      className={classStyle}
    >
      {title}
    </button>
  );
}

export default Hero;
