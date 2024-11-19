import { Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5 bg-white-a700`}
    >
      <Img src="images/img_connecxit_logo.png" alt="Logo Image" className="h-[90px] w-[16%] object-contain md:w-full" />
      <div className="mx-auto flex w-full max-w-[894px] items-center justify-center gap-[9px] px-[34px] md:flex-col md:px-5">
        <div className="flex flex-1 gap-2 md:self-stretch sm:flex-col">
          <div className="flex w-[26%] justify-center rounded-lg bg-red-a700 p-1 sm:w-full">
            <Text className="text-[15px] font-medium tracking-[-0.60px] text-white-a700">Get Tickets</Text>
          </div>
          <div className="flex flex-1 justify-center rounded-lg bg-deep_orange-500 p-1 sm:self-stretch">
            <Text className="text-[15px] font-medium tracking-[-0.60px] text-white-a700">Join As An Event Pro</Text>
          </div>
          <div className="flex w-[34%] justify-center rounded-lg bg-red-a700 p-1 sm:w-full">
            <Text className="text-[15px] font-medium tracking-[-0.60px] text-white-a700">Join As A Vendor</Text>
          </div>
        </div>
        <div className="flex w-[34%] items-center justify-center gap-2 md:w-full">
          <div className="mb-1.5 flex flex-1 justify-center self-end px-2.5">
            <Text className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">Explore</Text>
          </div>
          <div className="flex-1">
            <Text className="text-center text-[15px] font-normal leading-[114.7%] tracking-[-0.60px] text-black-900_01">
              Member Sign up
            </Text>
          </div>
          <a href="#">
            <Img
              src="images/img_image_2.png"
              alt="Secondary Image"
              className="h-[40px] w-[40px] rounded-[20px] object-cover"
            />
          </a>
          <div className="mb-1.5 flex flex-1 justify-center self-end px-4">
            <Text className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">Log in</Text>
          </div>
        </div>
      </div>
    </header>
  );
}
