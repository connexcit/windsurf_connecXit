import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  profileImage = "images/img_rectangle_276.png",
  userName = "Susan Von Firstenburg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-2`}>
      <Img src={profileImage} alt="Profile Image" className="h-[326px] w-full rounded-[14px] object-cover" />
      <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
        {userName}
      </Heading>
    </div>
  );
}
