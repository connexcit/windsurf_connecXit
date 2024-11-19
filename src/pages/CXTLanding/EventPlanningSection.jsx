import { Button, Img, Text, SelectBox, Heading } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EventPlanningSection() {
  return (
    <>
      {/* event planning section */}
      <div className="flex flex-col items-center">
        <div className="container-lg flex flex-col items-center gap-[60px] px-14 md:px-5 sm:gap-[30px]">
          <Heading
            size="heading5xl"
            as="h1"
            className="w-[64%] text-center text-[60px] font-bold leading-[114.7%] tracking-[-2.40px] text-black-900_02 md:w-full md:text-[52px] sm:text-[46px]"
          >
            <span className="text-black-900_02">Event</span>
            <span className="text-black-900_02">&nbsp;</span>
            <span className="text-deep_orange-500">planning</span>
            <span className="text-black-900_02">, made&nbsp;</span>
            <span className="text-black-900_02">made&nbsp;</span>
            <span className="text-black-900_02">eas</span>
            <span className="text-black-900_02">ier</span>
            <span className="text-black-900_02">.</span>
          </Heading>
          <div className="flex w-[72%] flex-col gap-[58px] md:w-full sm:gap-[29px]">
            <div className="mx-[94px] flex items-center gap-6 md:mx-0 md:flex-col">
              <div className="flex w-full justify-center px-14 md:px-5">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[16px] font-semibold tracking-[-0.64px] text-green-800"
                >
                  <span className="text-gray-700_02">HIRE an</span>
                  <span className="text-green-800">&nbsp;</span>
                  <span className="text-deep_orange-500">EVENT</span>
                  <span className="text-green-800">&nbsp;</span>
                  <span className="text-deep_orange-500">PRO</span>
                </Heading>
              </div>
              <div className="w-full px-1.5">
                <div className="flex">
                  <Heading
                    size="headinglg"
                    as="h3"
                    className="text-[16px] font-semibold tracking-[-0.64px] text-gray-700_02"
                  >
                    <span className="text-gray-700_02">FIND</span>
                    <span className="text-gray-700_02">&nbsp;</span>
                    <span className="text-deep_orange-500">EVENT</span>
                    <span className="text-gray-700_02">&nbsp;</span>
                    <span className="text-deep_orange-500">VENDORS</span>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex rounded-[22px] border border-solid border-gray-300_01 px-3 md:flex-col">
              <div className="flex flex-1 items-center gap-7 px-3 md:self-stretch sm:flex-col">
                <SelectBox
                  shape="square"
                  indicator={
                    <Img src="images/img_arrowdown_black_900_02.svg" alt="Arrow Down" className="h-[6px] w-[8px]" />
                  }
                  name="Event Date Dropdown"
                  placeholder={`When is your event?`}
                  options={dropDownOptions}
                  className="w-[42%] gap-2.5 !border-b tracking-[-0.60px] sm:w-full"
                />
                <SelectBox
                  size="xs"
                  shape="square"
                  indicator={
                    <Img src="images/img_arrowdown_black_900_02.svg" alt="Arrow Down" className="h-[6px] w-[8px]" />
                  }
                  name="Resources Dropdown"
                  placeholder={`What resources do you need?`}
                  options={dropDownOptions}
                  className="mb-2 flex-grow gap-3 self-end tracking-[-0.60px] text-black-900_01 sm:self-auto"
                />
              </div>
              <div className="flex w-[34%] items-center justify-center md:w-full">
                <div className="flex flex-1 items-center px-[30px] sm:px-5">
                  <div className="h-[44px] w-px bg-gray-300_01" />
                  <Img src="images/img_linkedin.svg" alt="Linkedin Image" className="ml-2 h-[20px]" />
                  <Text
                    as="p"
                    className="mb-2 ml-2 self-end text-[15px] font-normal tracking-[-0.60px] text-black-900_01"
                  >
                    Zip code
                  </Text>
                </div>
                <Button size="xl" shape="circle" className="w-[40px] self-end rounded-[20px] px-3">
                  <Img src="images/img_search.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
