"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

function Hero() {
  function handleClick() {
    console.log("click");
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">book, rent Cars</h1>
        <p className="hero__subtitle">
          streamline your car renatal exprience with our effortless , booking
          process .
        </p>
        <CustomButton
          name="hero button"
          type="button"
          isActive={true}
          title="Explore Cars"
          classStyle="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleClick}
        />''
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src='/hero.png' alt="hero image" fill className="object-contain" />
          <div className="hero__image-overlay">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
