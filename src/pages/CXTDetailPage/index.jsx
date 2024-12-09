import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import Footer5 from "../../components/Footer5";
import Header6 from "../../components/Header6";
import BillingSection from "./BillingSection";
import React from "react";
import { useNavigate } from "react-router-dom";

const CXTDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Navigation Tabs */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {["About", "Photos", "Services", "Reviews", "Credentials"].map((tab) => (
              <button key={tab} className="px-4 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-orange-500">
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2">
            {/* Header Section */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-32 h-32">
                <Img
                  src="images/chef_logo.png"
                  alt="Chef Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <Text className="text-2xl font-semibold mb-2">Chef John's Kitchen</Text>
                    <div className="flex items-center space-x-2">
                      <Text className="text-green-600">Exceptional 5.0</Text>
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-green-600">{star}</span>
                      ))}
                      <Text className="text-gray-600">(24)</Text>
                    </div>
                    <div className="flex items-center mt-2">
                      <img src="images/top_pro_badge.svg" alt="Top Pro" className="w-5 h-5 mr-2" />
                      <Text className="text-gray-600">Top Pro</Text>
                    </div>
                  </div>
                  <Button
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    onClick={() => {/* Share functionality */}}
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-8">
              <Text>ConnecXit // Private Chefs // Chef John's Kitchen</Text>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <Text className="font-semibold text-lg mb-4">Introduction</Text>
              <Text className="text-gray-700">
                Experience culinary excellence with Chef John's Kitchen! Our experienced, professionally trained chef delivers personalized, 
                gourmet dining experiences tailored to your preferences. First-time customers receive 15% off, plus additional savings on 
                recurring bookings with a 5-star review. With transparent pricing and premium ingredients...
                <button className="text-blue-500 hover:text-blue-600">Read More</button>
              </Text>
            </div>

            {/* Overview Section */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <Text className="font-semibold text-lg mb-4">Overview</Text>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <img src="images/top_pro.svg" className="w-5 h-5" />
                    <Text>Current Top Pro</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="images/hired.svg" className="w-5 h-5" />
                    <Text>Hired 28 times</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="images/location.svg" className="w-5 h-5" />
                    <Text>6 similar jobs done near you</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="images/background.svg" className="w-5 h-5" />
                    <Text>Background checked</Text>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="images/employees.svg" className="w-5 h-5" />
                    <Text>4 employees</Text>
                  </li>
                </ul>
              </div>

              <div>
                <Text className="font-semibold text-lg mb-4">Business hours</Text>
                <Text className="text-gray-600">Available 7 days a week</Text>

                <Text className="font-semibold text-lg mt-8 mb-4">Payment methods</Text>
                <Text className="text-gray-600">
                  Accepts payments via Credit card, Apple Pay, Google Pay, and Cash
                </Text>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <Text className="text-3xl font-semibold mb-2">$150</Text>
              <Text className="text-gray-600 mb-4">starting price</Text>
              <Text className="text-blue-500 hover:text-blue-600 mb-6 cursor-pointer">View details</Text>
              
              <Button 
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mb-6"
                onClick={() => {/* Check availability */}}
              >
                Check availability
              </Button>

              <div className="flex items-center space-x-2 text-gray-600">
                <img src="images/clock.svg" alt="Response time" className="w-5 h-5" />
                <Text>Responds in about 11 min</Text>
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="flex items-start space-x-3">
                  <img src="images/guarantee.svg" alt="Guarantee" className="w-6 h-6 mt-1" />
                  <div>
                    <Text className="font-semibold mb-2">ConnecXit Guarantee</Text>
                    <Text className="text-gray-600">
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
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button 
            className="w-full py-3 border rounded-lg hover:bg-gray-50"
            onClick={() => {/* Message */}}
          >
            Message
          </Button>
          <Button 
            className="w-full py-3 border rounded-lg hover:bg-gray-50"
            onClick={() => {/* Request a call */}}
          >
            Request a call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CXTDetailPage;
