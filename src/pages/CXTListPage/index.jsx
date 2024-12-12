import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import ChefCard from "../../components/ChefCard";
import React from "react";
import { useNavigate } from "react-router-dom";

const chefsList = [
  {
    name: "Chef Maria's Kitchen",
    rating: "Exceptional 5.0",
    reviewCount: 32,
    hireCount: 42,
    locationInfo: "12 similar jobs near you",
    responseTime: "Responds in about 15 min",
    startingPrice: 155,
    testimonial: "Chef Maria created an amazing dining experience for our family gathering...",
    imageUrl: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Sushi Master Ken",
    rating: "Great 4.8",
    reviewCount: 24,
    hireCount: 28,
    locationInfo: "Serves Raleigh-Durham Area",
    responseTime: "Responds in about 30 min",
    startingPrice: 185,
    testimonial: "Ken's sushi-making skills are incredible. He created a beautiful spread for our corporate event...",
    imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "BBQ Pro James",
    rating: "Excellent 4.9",
    reviewCount: 18,
    hireCount: 22,
    locationInfo: "8 similar jobs near you",
    responseTime: "Responds in about 1 hour",
    startingPrice: 145,
    testimonial: "James's BBQ skills are second to none. The food was amazing and the service was professional...",
    imageUrl: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Pastry Chef Sophie",
    rating: "Great 4.7",
    reviewCount: 15,
    hireCount: 19,
    locationInfo: "Specializes in desserts & pastries",
    responseTime: "Responds in about 45 min",
    startingPrice: 125,
    testimonial: "Sophie's desserts were the highlight of our wedding. Her attention to detail is amazing...",
    imageUrl: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Farm-to-Table Alex",
    rating: "Exceptional 5.0",
    reviewCount: 21,
    hireCount: 25,
    locationInfo: "Local ingredients specialist",
    responseTime: "Responds in about 20 min",
    startingPrice: 165,
    testimonial: "Alex's commitment to local ingredients and seasonal menus created an unforgettable experience...",
    imageUrl: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&auto=format&fit=crop&q=60"
  }
];

export default function CXTListPagePage() {
  const navigate = useNavigate();

  const handleChefClick = (chefData) => {
    console.log('Navigating to detail page with chef:', chefData);
    navigate('/cxtdetailpage', { state: { chefData } });
  };

  return (
    <>
      <Helmet>
        <title>Find Professional Chefs - ConnecXit</title>
        <meta name="description" content="Browse and hire professional chefs for your events through ConnecXit" />
      </Helmet>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chefsList.map((chef, index) => (
              <ChefCard 
                key={index}
                {...chef}
                onClick={() => handleChefClick(chef)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
