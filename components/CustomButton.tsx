"use client";

import { randomUUID } from "crypto";
import React from "react";
import { CustomButtonProps } from "@/types";
function Hero({
  name = `Button` + randomUUID,
  isActive,
  type,
  onClick,
  classStyle,
  title = "Button Name",
}: CustomButtonProps) {
  return (
    <button
      name={name}
      disabled={isActive}
      type={type}
      onClick={onClick}
      className={`custom-btn ${classStyle}`}
    >
      {title}
    </button>

  );
}

export default Hero;
