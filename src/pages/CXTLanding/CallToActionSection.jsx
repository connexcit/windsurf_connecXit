import { Button, Heading } from "../../components";
import React from "react";

export default function CallToActionSection() {
  return (
    <>
      {/* call to action section */}
      <div className="flex flex-col gap-[62px] sm:gap-[31px]">
        <div className="flex flex-col items-center">
          <div className="container-lg flex flex-col items-center gap-10 px-14 md:px-5">
            <Heading
              size="heading4xl"
              as="h3"
              className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
            >
              <span className="text-black-900_02">Ready to Join&nbsp;</span>
              <span className="text-deep_orange-500">ConnecXit ?</span>
            </Heading>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                size="xs"
                shape="round"
                className="min-w-[208px] rounded-lg px-[26px] font-medium tracking-[-1.60px] sm:px-5"
              >
                Sign Up!
              </Button>
            </a>
          </div>
        </div>
        <div className="mx-[122px] h-px bg-gray-500_04 md:mx-0" />
      </div>
    </>
  );
}
