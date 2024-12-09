import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import Header from "../../components/Header";

export default function CXTDetailPagePage() {
  return (
    <>
      <Helmet>
        <title>Chef Profile - ConnecXit</title>
        <meta
          name="description"
          content="View detailed profile, services, and reviews of professional chefs on ConnecXit. Book your next culinary experience with confidence."
        />
      </Helmet>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <div className="container mx-auto px-4 py-8">
          {/* Navigation Tabs */}
          <div className="border-b bg-white -mx-4 mb-8">
            <div className="container mx-auto px-4">
              <div className="flex space-x-8">
                {["About", "Photos", "Services", "Reviews", "Credentials"].map((tab) => (
                  <button 
                    key={tab} 
                    className="px-4 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-orange-500"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
                <div className="w-32 h-32 flex-shrink-0">
                  <Img
                    src="images/img_rectangle19.png"
                    alt="Chef Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <Text
                        className="text-2xl font-semibold mb-2"
                        size="txtInterSemiBold24"
                      >
                        Chef John's Kitchen
                      </Text>
                      <div className="flex items-center space-x-2">
                        <Text
                          className="text-green-600"
                          size="txtInterMedium16"
                        >
                          Exceptional 5.0
                        </Text>
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-green-600">{star}</span>
                        ))}
                        <Text
                          className="text-gray-600"
                          size="txtInterRegular14"
                        >
                          (24)
                        </Text>
                      </div>
                      <div className="flex items-center mt-2">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="Top Pro"
                          className="w-5 h-5 mr-2"
                        />
                        <Text
                          className="text-gray-600"
                          size="txtInterRegular14"
                        >
                          Top Pro
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="px-4 py-2 mt-4 md:mt-0"
                      shape="round"
                      variant="outline"
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="text-sm text-gray-500 mb-8">
                <Text size="txtInterRegular14">
                  ConnecXit // Private Chefs // Chef John's Kitchen
                </Text>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <Text
                  className="font-semibold text-lg mb-4"
                  size="txtInterSemiBold18"
                >
                  Introduction
                </Text>
                <Text
                  className="text-gray-700"
                  size="txtInterRegular16"
                >
                  Experience culinary excellence with Chef John's Kitchen! Our experienced, professionally trained chef delivers personalized, 
                  gourmet dining experiences tailored to your preferences. First-time customers receive 15% off, plus additional savings on 
                  recurring bookings with a 5-star review. With transparent pricing and premium ingredients...
                  <button className="text-blue-500 hover:text-blue-600 ml-1">Read More</button>
                </Text>
              </div>

              {/* Overview Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Text
                    className="font-semibold text-lg mb-4"
                    size="txtInterSemiBold18"
                  >
                    Overview
                  </Text>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Img src="images/img_checkmark.svg" className="w-5 h-5" alt="Top Pro Icon" />
                      <Text size="txtInterRegular16">Current Top Pro</Text>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Img src="images/img_user.svg" className="w-5 h-5" alt="Hired Icon" />
                      <Text size="txtInterRegular16">Hired 28 times</Text>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Img src="images/img_location.svg" className="w-5 h-5" alt="Location Icon" />
                      <Text size="txtInterRegular16">6 similar jobs done near you</Text>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Img src="images/img_shield.svg" className="w-5 h-5" alt="Background Check Icon" />
                      <Text size="txtInterRegular16">Background checked</Text>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Img src="images/img_group.svg" className="w-5 h-5" alt="Employees Icon" />
                      <Text size="txtInterRegular16">4 employees</Text>
                    </li>
                  </ul>
                </div>

                <div>
                  <Text
                    className="font-semibold text-lg mb-4"
                    size="txtInterSemiBold18"
                  >
                    Business hours
                  </Text>
                  <Text
                    className="text-gray-600"
                    size="txtInterRegular16"
                  >
                    Available 7 days a week
                  </Text>

                  <Text
                    className="font-semibold text-lg mt-8 mb-4"
                    size="txtInterSemiBold18"
                  >
                    Payment methods
                  </Text>
                  <Text
                    className="text-gray-600"
                    size="txtInterRegular16"
                  >
                    Accepts payments via Credit card, Apple Pay, Google Pay, and Cash
                  </Text>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <Text
                  className="text-3xl font-semibold mb-2"
                  size="txtInterSemiBold32"
                >
                  $150
                </Text>
                <Text
                  className="text-gray-600 mb-4"
                  size="txtInterRegular16"
                >
                  starting price
                </Text>
                <Text
                  className="text-blue-500 hover:text-blue-600 mb-6 cursor-pointer"
                  size="txtInterMedium16"
                >
                  View details
                </Text>
                
                <Button
                  className="w-full py-3 mb-6"
                  shape="round"
                  variant="fill"
                  color="blue_500"
                >
                  Check availability
                </Button>

                <div className="flex items-center space-x-2 text-gray-600">
                  <Img src="images/img_clock.svg" alt="Response time" className="w-5 h-5" />
                  <Text size="txtInterRegular14">Responds in about 11 min</Text>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-start space-x-3">
                    <Img src="images/img_shield_check.svg" alt="Guarantee" className="w-6 h-6 mt-1" />
                    <div>
                      <Text
                        className="font-semibold mb-2"
                        size="txtInterSemiBold16"
                      >
                        ConnecXit Guarantee
                      </Text>
                      <Text
                        className="text-gray-600"
                        size="txtInterRegular14"
                      >
                        If you hire this pro, you're covered by a money-back guarantee.
                        <span className="text-blue-500 hover:text-blue-600 ml-1 cursor-pointer">
                          Learn more
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              className="w-full py-3"
              shape="round"
              variant="outline"
            >
              Message
            </Button>
            <Button
              className="w-full py-3"
              shape="round"
              variant="outline"
            >
              Request a call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
