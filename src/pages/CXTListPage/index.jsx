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
                        src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60"
                        alt="Chef Maria profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Chef Maria's Kitchen
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Exceptional 5.0</Text>
                            <Text className="text-gray-600 ml-1">(32)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">42 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">12 similar jobs near you</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 15 min</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$155</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "Chef Maria created an incredible dining experience. Her Mediterranean fusion dishes were outstanding..."
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
                        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=60"
                        alt="Chef Ken profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Sushi Master Ken
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Great 4.8</Text>
                            <Text className="text-gray-600 ml-1">(24)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">28 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">Serves Raleigh-Durham Area</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 30 min</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$185</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "Ken's sushi-making skills are incredible. He created a beautiful spread for our corporate event..."
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

                {/* Chef Card 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-6">
                    <div className="w-24 h-24">
                      <Img
                        src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&auto=format&fit=crop&q=60"
                        alt="Chef James profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            BBQ Pro James
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Excellent 4.9</Text>
                            <Text className="text-gray-600 ml-1">(18)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">22 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">8 similar jobs near you</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 1 hour</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$145</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "James' BBQ skills are unmatched. The brisket and ribs were perfectly smoked..."
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

                {/* Chef Card 4 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-6">
                    <div className="w-24 h-24">
                      <Img
                        src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&auto=format&fit=crop&q=60"
                        alt="Chef Sophie profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Pastry Chef Sophie
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Great 4.7</Text>
                            <Text className="text-gray-600 ml-1">(15)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">19 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">Specializes in desserts & pastries</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 45 min</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$125</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "Sophie's desserts were the highlight of our wedding. Her attention to detail is amazing..."
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

                {/* Chef Card 5 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-6">
                    <div className="w-24 h-24">
                      <Img
                        src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&auto=format&fit=crop&q=60"
                        alt="Chef Alex profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Heading as="h2" className="text-xl font-semibold">
                            Farm-to-Table Alex
                          </Heading>
                          <div className="flex items-center mt-1">
                            <Text className="text-green-600 font-medium">Exceptional 5.0</Text>
                            <Text className="text-gray-600 ml-1">(21)</Text>
                          </div>
                          <div className="mt-2 space-y-1">
                            <Text className="text-gray-600 text-sm">25 hires on ConnecXit</Text>
                            <Text className="text-gray-600 text-sm">Local ingredients specialist</Text>
                            <Text className="text-gray-600 text-sm">Responds in about 20 min</Text>
                          </div>
                        </div>
                        <div className="text-right">
                          <Text className="text-xl font-semibold">$165</Text>
                          <Text className="text-gray-600 text-sm">starting price</Text>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Text className="text-gray-800">
                          "Alex's commitment to local ingredients and seasonal menus created an unforgettable experience..."
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
