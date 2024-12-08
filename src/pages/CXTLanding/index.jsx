import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import CXTLandingRowtransportati from "../../components/CXTLandingRowtransportati";
import Footer5 from "../../components/Footer5";
import Header from "../../components/Header";
import CallToActionSection from "./CallToActionSection";
import EventPlanningSection from "./EventPlanningSection";
import EventPromotionSection from "./EventPromotionSection";
import VendorSearchSection from "./VendorSearchSection";
import React, { useState } from "react";

export default function CXTLandingPage() {
  const [isEventPro, setIsEventPro] = useState(true);

  return (
    <>
      <Helmet>
        <title>Event Planning Made Easy - ConnecXit</title>
        <meta
          name="description"
          content="Discover top event planners, venues, and vendors at ConnecXit. Simplify your event planning with our comprehensive resources. Join today and make your next event a success."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white-a700">
        {/* Header */}
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 space-y-12 md:space-y-16 lg:space-y-20 py-8 md:py-12">
          {/* Event Planning Section */}
          <section className="w-full">
            <EventPlanningSection isEventPro={isEventPro} setIsEventPro={setIsEventPro} />
          </section>

          {/* Event Promotion Section */}
          <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 space-y-12 md:space-y-16">
            <EventPromotionSection />
            
            {/* Explore More Services Heading */}
            <div className="text-center px-4">
              <Heading
                size="heading4xl"
                as="h4"
                className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-1.60px] text-black-900_02"
              >
                <span className="text-black-900_02">Explore more </span>
                <span className="text-deep_orange-500">event services</span>
                <span className="text-black-900_01">.</span>
              </Heading>
            </div>
          </section>

          {/* Transportation Section */}
          <section className="w-full">
            <CXTLandingRowtransportati />
          </section>

          {/* Vendor Search and Call to Action */}
          <section className="w-full space-y-12 md:space-y-16">
            <VendorSearchSection />
            <CallToActionSection />
          </section>
        </main>

        {/* Footer */}
        <Footer5 className="mt-auto" />
      </div>
    </>
  );
}
