import { Helmet } from "react-helmet";
import Footer2 from "../../components/Footer2";
import CXTInboxSection from "./CXTInboxSection";
import EventPlannerRecommendationsSection from "./EventPlannerRecommendationsSection";
import RecommendedVendorsSection from "./RecommendedVendorsSection";
import React from "react";

export default function CXTInboxPage() {
  return (
    <>
      <Helmet>
        <title>Inbox - Manage Your Conversations and Projects</title>
        <meta
          name="description"
          content="Access your inbox to keep track of conversations, project reminders, and bookings. Connect with top event planners and vendors like photographers, caterers, and more."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[148px] bg-white-a700 py-[42px] lg:gap-[111px] md:gap-[111px] md:py-5 sm:gap-[74px] sm:py-4">
        <div className="mt-[94px] flex flex-col gap-[38px] self-stretch">
          {/* c x t inbox section */}
          <CXTInboxSection />

          {/* event planner recommendations section */}
          <EventPlannerRecommendationsSection />

          {/* recommended vendors section */}
          <RecommendedVendorsSection />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
