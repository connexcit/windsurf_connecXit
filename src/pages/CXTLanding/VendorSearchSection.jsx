import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const vendorList = [
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
];

export default function VendorSearchSection() {
  return (
    <>
      {/* vendor search section */}
      <div className="flex flex-col items-center gap-[50px]">
        <div className="container-lg flex flex-col items-center px-14 md:px-5">
          <Heading
            size="heading4xl"
            as="h2"
            className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
          >
            <span className="text-black-900_02">Search Pro Vendors by&nbsp;</span>
            <span className="text-deep_orange-500">category</span>
          </Heading>
        </div>
        <div className="flex w-[84%] gap-12 px-6 py-3 md:w-full md:flex-col sm:px-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {vendorList.map((d, index) => (
              <UserProfile {...d} key={"cardList" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
