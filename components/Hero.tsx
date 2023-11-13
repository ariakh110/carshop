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
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          name="hero button"
          type="button"
          isActive={true}
          title="Explore Cars"
          classStyle="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleClick}
        />
        </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
