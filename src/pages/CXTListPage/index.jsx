import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Header6 from "../../components/Header6";
import React from "react";

export default function CXTListPagePage() {
  return (
    <>
      <Helmet>
        <title>Find Professional Chefs - ConnecXit Listings</title>
        <meta
          name="description"
          content="Discover professional chefs matching your criteria on ConnecXit. View profiles, starting prices, and read customer testimonials to find the perfect chef for your event."
        />
      </Helmet>
      <div className="flex flex-col bg-white-a700">
        <Header6 className="w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Heading
              size="heading2xl"
              as="h1"
              className="mt-[62px] text-[20px] font-semibold tracking-[-0.80px] text-black-900_01"
            >
              Chefs that matched your search criteria...
            </Heading>
            
            <div className="flex w-full max-w-[1282px] flex-row items-start justify-between gap-8 mt-8 px-4">
              {/* Filters Section */}
              <div className="flex flex-col items-start w-[250px] bg-white-a700 p-4 rounded-lg">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-black-900_02">
                  Filters
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-green-800">
                  When can you start?
                </Text>
                <Text
                  size="textmd"
                  as="p"
                  className="mt-[22px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03"
                >
                  Within 48 hours
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-black-900_02">
                  Search
                </Text>
                <Text as="p" className="mt-3 text-[15px] font-medium tracking-[-0.60px] text-black-900_02">
                  Billing
                </Text>
              </div>

              {/* Results Section */}
              <div className="flex-1">
                <div className="flex flex-col gap-6">
                  {/* Chef Card */}
                  <div className="flex flex-col bg-white-a700 rounded-lg p-6 shadow-md">
                    <div className="flex flex-row items-start gap-8">
                      <div className="w-[126px] h-[126px] rounded-full overflow-hidden bg-white-a700">
                        <Img
                          src="images/img_rectangle_355.png"
                          alt="Chef Nico"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-row items-start justify-between">
                          <div>
                            <Heading
                              size="headingmd"
                              as="h2"
                              className="text-[15px] font-bold tracking-[-0.60px] text-black-900_02"
                            >
                              CHEF NICO
                            </Heading>
                            <div className="mt-2">
                              <Text
                                size="texts"
                                as="p"
                                className="text-[12px] font-normal tracking-[-0.48px] text-black-900_02"
                              >
                                324 hires on ConnecXit
                              </Text>
                              <Text
                                size="texts"
                                as="p"
                                className="text-[12px] font-normal tracking-[-0.48px] text-black-900_02"
                              >
                                Responds within a day
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                              $30/person
                            </Text>
                            <Text
                              size="textxs"
                              as="p"
                              className="text-[10px] font-normal tracking-[-0.40px] text-gray-700_03"
                            >
                              starting price
                            </Text>
                          </div>
                        </div>
                        
                        <Text
                          size="textmd"
                          as="p"
                          className="mt-4 text-[13px] font-normal leading-[146.7%] tracking-[-0.52px] text-black-900_02"
                        >
                          Hannah H. Says "I hired Chef Nico to cook for a bachelorette party. He helped me to make a
                          custom menu that would best fit our needs."
                        </Text>
                        
                        <div className="mt-4 flex justify-end">
                          <Button 
                            className="min-w-[116px] rounded-[16px] px-[18px] tracking-[-0.60px] bg-deep_orange-500 text-white-a700"
                            color="deep_orange_500"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black-900 mt-[90px] w-full">
          <div className="flex flex-col items-center justify-center max-w-[1282px] mx-auto p-[30px] sm:p-5">
            <Img
              src="images/img_connecxit_logo.png"
              alt="ConnecXit Logo"
              className="h-[150px] w-auto object-contain mb-[82px]"
            />
            <div className="flex flex-row items-start justify-between w-full gap-5 md:flex-col">
              <div className="flex flex-col items-start gap-1">
                <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                  About Us
                </Heading>
                <ul className="flex flex-col items-start gap-2">
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">Company</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">Careers</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">News</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                  Support
                </Heading>
                <ul className="flex flex-col items-start gap-2">
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">Contact Us</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">Knowledge Base</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">Product Help Center</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                  Become a Partner
                </Heading>
                <ul className="flex flex-col items-start gap-2">
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">For Chefs</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">For Event Planners</a></li>
                  <li><a href="#" className="text-[15px] font-normal text-white-a700">For Vendors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
