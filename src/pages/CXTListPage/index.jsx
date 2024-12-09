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
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header6 className="w-full" />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue-50 w-full p-4 mb-6 rounded-lg">
              <Text className="text-blue-800 text-center">Responds quickly</Text>
            </div>
            
            <div className="flex w-full gap-8">
              {/* Filters Section */}
              <div className="w-64 flex-shrink-0">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Text className="font-semibold mb-4">Filters</Text>
                  <div className="space-y-4">
                    <div>
                      <Text className="text-sm font-medium mb-2">Location</Text>
                      <Text className="text-sm text-gray-600">Raleigh, NC</Text>
                    </div>
                    <div>
                      <Text className="text-sm font-medium mb-2">Response Time</Text>
                      <Text className="text-sm text-gray-600">Within 48 hours</Text>
                    </div>
                    <div>
                      <Text className="text-sm font-medium mb-2">Price Range</Text>
                      <Text className="text-sm text-gray-600">$30 - $200</Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="flex-1 space-y-4">
                {/* Chef Card 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-6">
                    <div className="w-24 h-24">
                      <Img
                        src="images/img_rectangle_355.png"
                        alt="Chef profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Chef Nico
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Exceptional 5.0</Text>
                            <Text className="text-gray-600 ml-1">(6)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">15 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">4 similar jobs done near you</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 11 min</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$132</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "Chef Nico did an amazing job with our dinner party. The food was exceptional and the service was outstanding..."
                        </Text>
                        <Button
                          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chef Card 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-6">
                    <div className="w-24 h-24">
                      <Img
                        src="images/img_rectangle_356.png"
                        alt="Chef profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Triangle Cleaning
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Great 4.8</Text>
                            <Text className="text-gray-600 ml-1">(10)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">18 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">Serves Raleigh, NC</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 2 hours</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$77</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button
                          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
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
    </>
  );
}
