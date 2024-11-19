import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import CXTLandingRowtransportati from "../../components/CXTLandingRowtransportati";
import Footer5 from "../../components/Footer5";
import Header from "../../components/Header";
import CallToActionSection from "./CallToActionSection";
import EventPlannerSection from "./EventPlannerSection";
import EventPlanningSection from "./EventPlanningSection";
import EventPromotionSection from "./EventPromotionSection";
import VendorSearchSection from "./VendorSearchSection";
import React from "react";

export default function CXTLandingPage() {
  return (
    <>
      <Helmet>
        <title>Event Planning Made Easy - ConnecXit</title>
        <meta
          name="description"
          content="Discover top event planners, venues, and vendors at ConnecXit. Simplify your event planning with our comprehensive resources. Join today and make your next event a success."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[62px] bg-white-a700 py-[34px] sm:gap-[31px] sm:py-5">
        <Header />
        <div className="flex flex-col gap-[58px] sm:gap-[29px]">
          {/* event planning section */}
          <EventPlanningSection />
          <div className="ml-[118px] mr-24 flex flex-col items-center gap-[58px] md:mx-0 sm:gap-[29px]">
            {/* event promotion section */}
            <EventPromotionSection />

            {/* event planner section */}
            <EventPlannerSection />
            <div className="container-lg flex flex-col items-center px-14 md:px-5">
              <Heading
                size="heading4xl"
                as="h4"
                className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
              >
                <span className="text-black-900_02">Explore more&nbsp;</span>
                <span className="text-deep_orange-500">event services</span>
                <span className="text-black-900_01">.</span>
              </Heading>
            </div>
          </div>

          {/* transportation section */}
          <CXTLandingRowtransportati />
          <div className="flex flex-col gap-[62px] sm:gap-[31px]">
            {/* vendor search section */}
            <VendorSearchSection />

            {/* call to action section */}
            <CallToActionSection />
          </div>
        </div>
        <Footer5 className="mb-[688px]" />
      </div>
    </>
  );
}
