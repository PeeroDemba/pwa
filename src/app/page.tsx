"use client";

import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { PiArrowsLeftRightBold } from "react-icons/pi";

export default function Home() {
  const [manual, setManual] = useState(false);

  return (
    <>
      <main className="mt-8 px-8 relative">
        <h1 className="text-[24px] font-semibold mt-20 mb-16 md:hidden">
          Welcome back
        </h1>
        <Image
          src="/images/pexels-darina-belonogova.png"
          alt="Background Photo"
          width={1360}
          height={471}
          className="hidden md:block w-full"
        />
        <Image
          src="/images/pexels-darina-belonogova-mobile.png"
          alt="Background Photo"
          width={1360}
          height={471}
          className="md:hidden block"
        />
        {!manual && (
          <div className="bg-white w-full md:h-[377px] md:w-[408px] rounded-3xl md:px-12 pt-12 md:pt-16 pb-24 md:absolute top-[50%] left-24 md:shadow-[1px_0.5px_150px_2.5px_#428ac14b]">
            <h1 className="text-[24px] font-semibold mb-2 hidden md:block">
              Welcome back
            </h1>
            <p className="text-[#585858] mb-8 hidden md:block">Login using:</p>
            <button
              type="button"
              className="border-[#5d5d5d] border w-full md:w-[325px] rounded-[5rem] mb-8 flex justify-center items-center gap-4 py-4 px-16"
            >
              <FcGoogle size="1.5rem" />
              <span className="text-[#5d5d5d]">Login with Google</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setManual(true);
              }}
              className="text-[#5d5d5d] hidden md:flex gap-4 items-center"
            >
              <PiArrowsLeftRightBold />
              <span>Click to switch to manual</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setManual(true);
              }}
              className="text-[#5d5d5d] flex md:hidden gap-4 items-center"
            >
              <PiArrowsLeftRightBold />
              <span>Tap to switch to manual</span>
            </button>
          </div>
        )}
        {manual && (
          <div className="bg-white md:h-[377px] w-full md:w-[408px] rounded-3xl md:px-12 pt-12 md:pt-6 pb-8 md:absolute top-[50%] left-24 md:shadow-[1px_0.5px_150px_2.5px_#428ac14b]">
            <h1 className="text-[24px] font-semibold mb-6 hidden md:block">
              Log In
            </h1>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                className="px-4 py-4 md:py-3 border border-[#5d5d5d] rounded-lg w-full md:w-[290px]"
                placeholder="name@email.com"
              />
              <input
                type="text"
                className="px-4 py-4 md:py-3 border border-[#5d5d5d] rounded-lg w-full md:w-[290px]"
                placeholder="please enter password"
              />
            </div>
            <p className="text-[#898989] mt-2 mb-6">Forgot Password?</p>
            <button
              type="button"
              className="md:rounded-[5rem] rounded-lg w-full md:w-max bg-black text-white py-4 md:py-2 px-10"
            >
              Proceed
            </button>
            <button
              type="button"
              onClick={() => {
                setManual(false);
              }}
              className="text-[#5d5d5d] hidden md:flex gap-4 items-center mt-4"
            >
              <PiArrowsLeftRightBold />
              <span>Click to login with google</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setManual(false);
              }}
              className="text-[#5d5d5d] flex md:hidden gap-4 items-center mt-4"
            >
              <PiArrowsLeftRightBold />
              <span>Tap to login with Google</span>
            </button>
          </div>
        )}
      </main>
      <footer className="bg-[#f5f5f5] text-[#484848] md:hidden px-8 pt-20 pb-8">
        <div className="text-[14px] flex gap-2 justify-between mb-8">
          <p>About</p>
          <p>Products</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>SME</p>
        </div>
        <div className="text-[14px] flex gap-2 justify-evenly mb-4">
          <p>+234 927370584</p>
          <p>support@test.com</p>
        </div>
      </footer>
    </>
  );
}
