import { Helmet } from "react-helmet";
import { Text, Heading, Img, Switch, Button } from "../../components";
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
      <div className="w-full bg-white-a700">
        <div className="flex flex-col items-start gap-[62px] sm:gap-[31px]">
          <Header6 className="self-stretch" />
          <Heading
            size="heading2xl"
            as="h1"
            className="ml-[446px] text-[20px] font-semibold tracking-[-0.80px] text-black-900_01 md:ml-0"
          >
            Chefs that matched your search criteria ...
          </Heading>
          <div className="flex flex-col items-center self-stretch">
            <div className="container-xl flex items-start justify-center self-stretch py-1.5 md:flex-col md:px-5">
              <div className="mt-3 flex flex-col items-start">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Filters
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-green-800">
                  When can you start?
                </Text>
                <Text
                  size="textmd"
                  as="p"
                  className="mt-[22px] text-[13px] font-normal tracking-[-0.52px] text-gray-400"
                >
                  Within 48 hours
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Search
                </Text>
                <Text as="p" className="mt-3 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Billing
                </Text>
              </div>
              <div className="mt-2.5 flex w-[76%] flex-col items-end gap-12 self-center md:w-full">
                <div className="mt-1.5 self-stretch">
                  <div className="flex flex-col items-end">
                    <div className="mx-[82px] flex items-center gap-12 self-stretch md:mx-0 md:flex-col">
                      <div className="mb-1.5 flex w-[20%] flex-col items-end rounded-[68px] bg-white-a700 py-2.5 md:w-full">
                        <Img
                          src="images/img_rectangle_355.png"
                          alt="Profile Image"
                          className="h-[126px] w-[126px] rounded-[58px] object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-[62px] self-end px-2 md:self-stretch sm:gap-[31px] sm:self-auto">
                        <div className="flex flex-col items-start self-stretch">
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
                        <Button className="mb-2 min-w-[116px] rounded-[16px] px-[18px] tracking-[-0.60px]">
                          View Profile
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start justify-end self-stretch md:flex-col">
                      <div className="mb-[22px] flex w-[64%] flex-col items-start gap-5 md:w-full">
                        <Heading
                          size="headingmd"
                          as="h2"
                          className="text-[15px] font-bold tracking-[-0.60px] text-gray-700_03"
                        >
                          CHEF NICO
                        </Heading>
                        <div className="flex flex-col items-start gap-0.5 self-stretch">
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            324 hires on Conn
                          </Text>
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            Serves Raleigh, NC
                          </Text>
                          <Text
                            size="texts"
                            as="p"
                            className="mb-2.5 text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            Respond a within a day
                          </Text>
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="w-[66%] text-[13px] font-normal leading-[146.7%] tracking-[-0.52px] text-gray-700_03 md:w-full"
                        >
                          Hannah H. Says “I hired Chef Nico to cook for a bachelorette party. He helped me to make a
                          custom menu that would best fit our needs.”
                        </Text>
                      </div>
                      <Switch value={true} className="self-end md:self-auto" />
                    </div>
                    <Switch value={false} className="mt-[132px]" />
                    <div className="mt-[134px] h-[16px] w-[16px] rounded-lg bg-white-a700" />
                  </div>
                </div>
                <Img src="images/img_ellipse_13.png" alt="Secondary Image" className="h-px w-[2%] object-contain" />
              </div>
            </div>
            <footer className="relative mt-[-6px] flex self-stretch">
              <div className="flex w-full flex-col items-center rounded-[12px] bg-black-900 p-[30px] sm:p-5">
                <div className="mx-auto mb-[86px] flex w-full max-w-[1282px] flex-col items-end gap-[82px] md:gap-[61px] sm:gap-[41px]">
                  <Img
                    src="images/img_connecxit_logo.png"
                    alt="Company Logo"
                    className="h-[150px] w-[28%] object-contain"
                  />
                  <div className="mr-[38px] flex w-full items-start justify-between gap-5 md:mr-0 md:flex-col">
                    <div className="flex w-[22%] flex-col items-start gap-1 md:w-full">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        About Us
                      </Heading>
                      <ul className="flex flex-col items-start gap-2">
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Company
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Careers
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              News
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-[28%] flex-col items-start gap-1 md:w-full">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        Support
                      </Heading>
                      <ul className="flex flex-col items-start gap-2">
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Contact Us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Knowledge Base
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Product Help Center
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-[30%] flex-col items-start gap-1 self-center md:w-full">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        Become a Partner
                      </Heading>
                      <ul className="flex flex-col items-start gap-2">
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Associations
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Francises
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Affilates
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Offers
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        Constant Contact Onairn
                      </Heading>
                      <ul className="flex flex-col items-start gap-2">
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              SharpSpring
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Retention Science
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
