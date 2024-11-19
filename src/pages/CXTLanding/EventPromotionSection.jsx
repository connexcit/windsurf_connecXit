import { Img, Text, Heading } from "../../components";
import React from "react";

export default function EventPromotionSection() {
  return (
    <>
      {/* event promotion section */}
      <div className="flex justify-center self-stretch">
        <div className="container-lg flex items-center justify-center px-14 md:flex-col md:px-5">
          <div className="flex w-[50%] flex-col items-start md:w-full">
            <Heading
              size="heading4xl"
              as="h2"
              className="text-[40px] font-semibold leading-[114.7%] tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
            >
              <span className="text-black-900_02">Event stress&nbsp;</span>
              <span className="text-deep_orange-500">
                <>
                  gone.
                  <br />
                  Join ConnecXit today.
                </>
              </span>
            </Heading>
            <Text
              as="p"
              className="w-[74%] text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700 md:w-full"
            >
              ConnecXit is your one stop shop for all things events. ConnecXit brings together top event planners, the
              best event venues and all vendors that can aid it making your next event a success.
            </Text>
          </div>
          <Img
            src="images/img_rectangle_7.png"
            alt="Event Image"
            className="h-[434px] w-[40%] rounded-[30px] object-contain md:w-full"
          />
        </div>
      </div>
    </>
  );
}
