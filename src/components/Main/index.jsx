import React from "react";
import Button from "../Button";
import Image from "../../assets/image-mockups.png";

function Main() {
  return (
    <div className=" relative overflow-hidden">
      <main className="flex flex-col bg-hero-pattern-mobile bg-cover md:bg-auto   md:bg-hero-pattern-dekstop md:bg-custom-right bg-no-repeat   ">
        <section className="flex h-[671px] ">
          <div className="flex flex-col gap-4 px-6 mt-auto md:mt-0  md:container md:mx-auto md:px-0 items-center md:items-start  md:justify-center text-center md:text-start">
            <h1 className="text-[#2d314d] font-light text-3xl md:w-[15ch] md:text-6xl   ">
              Next generation digital banking
            </h1>
            <p className="text-base md:text-lg font-normal leading-6  text-[#9597A5] mb-4 md:w-[45ch]">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button>Request Invite</Button>
          </div>
        </section>
      </main>
      <section className="w-full h-full  ">Ikıncı dıv</section>

      <div className="absolute -top-16 right-0 md:-top-32  ">
        <img className="" src={Image} alt="" />
      </div>
    </div>
  );
}

export default Main;
