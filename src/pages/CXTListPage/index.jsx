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
      <div className="min-h-screen w-full bg-white-a700">
        <Header6 className="w-full" />
        <div className="container mx-auto px-4 py-8">
          <Heading
            size="heading2xl"
            as="h1"
            className="mb-8 text-center text-[24px] font-semibold tracking-[-0.80px] text-black-900_01"
          >
            Chefs that matched your search criteria...
          </Heading>

          <div className="flex flex-col gap-8 md:flex-col">
            {/* Filters Section */}
            <div className="w-full md:w-full lg:w-1/4">
              <div className="sticky top-4 rounded-lg bg-white-a700 p-4 shadow-sm">
                <Text as="p" className="mb-4 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Filters
                </Text>
                <div className="space-y-4">
                  <div>
                    <Text as="p" className="mb-2 text-[15px] font-medium tracking-[-0.60px] text-green-800">
                      When can you start?
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[13px] font-normal tracking-[-0.52px] text-gray-400"
                    >
                      Within 48 hours
                    </Text>
                  </div>
                  <div>
                    <Text as="p" className="mb-2 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                      Search
                    </Text>
                  </div>
                  <div>
                    <Text as="p" className="mb-2 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                      Billing
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Chef Card */}
                <div className="rounded-lg bg-white-a700 p-6 shadow-sm">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-shrink-0">
                      <Img
                        src="images/img_rectangle_355.png"
                        alt="Chef Nico"
                        className="h-[126px] w-[126px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Heading
                          size="headingmd"
                          as="h2"
                          className="mb-2 text-[18px] font-bold tracking-[-0.60px] text-gray-700_03"
                        >
                          CHEF NICO
                        </Heading>
                        <div className="mb-4 space-y-1">
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            324 hires on ConnecXit
                          </Text>
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            Responds within a day
                          </Text>
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="mb-4 text-[13px] font-normal leading-[146.7%] tracking-[-0.52px] text-gray-700_03"
                        >
                          Hannah H. Says "I hired Chef Nico to cook for a bachelorette party. He helped me to make a
                          custom menu that would best fit our needs."
                        </Text>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                            $30/person
                          </Text>
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[10px] font-normal tracking-[-0.40px] text-gray-500_01"
                          >
                            starting price
                          </Text>
                        </div>
                        <Button className="rounded-[16px] px-6 py-2 tracking-[-0.60px]">
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

        {/* Footer */}
        <footer className="mt-12 bg-black-900 px-4 py-8 text-white-a700">
          <div className="container mx-auto">
            <div className="mb-12">
              <Img
                src="images/img_connecxit_logo.png"
                alt="ConnecXit Logo"
                className="mx-auto h-[100px] w-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <Heading as="h6" className="mb-4 text-[18px] font-semibold">
                  About Us
                </Heading>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[15px] hover:text-gray-300">Company</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">Careers</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">News</a></li>
                </ul>
              </div>
              <div>
                <Heading as="h6" className="mb-4 text-[18px] font-semibold">
                  Support
                </Heading>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[15px] hover:text-gray-300">Contact Us</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">Knowledge Base</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">Product Help Center</a></li>
                </ul>
              </div>
              <div>
                <Heading as="h6" className="mb-4 text-[18px] font-semibold">
                  Become a Partner
                </Heading>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[15px] hover:text-gray-300">For Chefs</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">For Event Planners</a></li>
                  <li><a href="#" className="text-[15px] hover:text-gray-300">For Vendors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
