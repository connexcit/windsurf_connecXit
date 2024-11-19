import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const profileList = [
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
];

export default function EventPlannerSection() {
  return (
    <>
      {/* event planner section */}
      <div className="flex flex-col items-center gap-[54px] self-stretch sm:gap-[27px]">
        <div className="container-lg md:px-5">
          <div className="flex justify-center px-14 md:px-5">
            <div className="flex">
              <Heading
                size="heading4xl"
                as="h3"
                className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
              >
                <span className="text-black-900_02">Hire&nbsp;</span>
                <span className="text-deep_orange-500">top event planners</span>
                <span className="text-black-900_01">.</span>
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex gap-12 self-stretch px-6 py-3 md:flex-col sm:px-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {profileList.map((d, index) => (
              <UserProfile {...d} key={"servicesList" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
