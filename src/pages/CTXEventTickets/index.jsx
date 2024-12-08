import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer5 from "../../components/Footer5";
import Select from "react-select";
import { Button } from '@radix-ui/themes';

const categories = [
  { value: "all", label: "All Categories" },
  { value: "music", label: "Music" },
  { value: "food-drink", label: "Food & Drink" },
  { value: "charity", label: "Charity & Causes" },
  { value: "business", label: "Business" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "arts", label: "Arts" },
  { value: "technology", label: "Science & Tech" }
];

const dateOptions = [
  { value: "any", label: "Any date" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "weekend", label: "This weekend" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month" }
];

const mockEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "Sat, June 15, 2024 • 2:00 PM",
    location: "Central Park, New York",
    image: "images/img_rectangle_276.png",
    category: "Music",
    price: "From $59.99"
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    date: "Mon, July 1, 2024 • 9:00 AM",
    location: "Convention Center, San Francisco",
    image: "images/img_rectangle_276.png",
    category: "Technology",
    price: "From $299.99"
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    date: "Sat, August 10, 2024 • 12:00 PM",
    location: "Downtown District",
    image: "images/img_rectangle_276.png",
    category: "Food & Drink",
    price: "From $75.00"
  },
  {
    id: 4,
    title: "Charity Gala Night",
    date: "Fri, September 20, 2024 • 7:00 PM",
    location: "Grand Hotel Ballroom",
    image: "images/img_rectangle_276.png",
    category: "Charity",
    price: "From $150.00"
  }
];

const customSelectStyles = {
  control: (base) => ({
    ...base,
    minHeight: '48px',
    border: '1px solid #E6E6E6',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #E6E6E6'
    }
  }),
  placeholder: (base) => ({
    ...base,
    color: '#666666',
    fontSize: '15px'
  })
};

export default function CTXEventTickets() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Find Events - ConnecXit</title>
        <meta
          name="description"
          content="Discover amazing events near you. Buy tickets to music concerts, food festivals, tech conferences, and more on ConnecXit."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white-a700">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-deep_orange-500 to-red-a700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white mb-6">
              Find your next event
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-deep_orange-500"
                />
                <Select
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Category"
                  styles={customSelectStyles}
                  className="w-full"
                />
                <Select
                  options={dateOptions}
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Date"
                  styles={customSelectStyles}
                  className="w-full"
                />
              </div>
              <Button size="3" variant="solid" color="orange" className="mt-4 w-full md:w-auto">
                Search Events
              </Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[24px] md:text-[28px] font-semibold mb-8 text-gray-900">
              Popular Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockEvents.map((event) => (
                <div key={event.id} className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative pb-[56.25%]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-deep_orange-500 text-sm font-medium mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-[18px] font-semibold mb-2 text-gray-900">
                      {event.title}
                    </h3>
                    <span className="text-gray-600 text-sm mb-1">
                      {event.date}
                    </span>
                    <span className="text-gray-600 text-sm mb-4">
                      {event.location}
                    </span>
                    <span className="text-gray-900 font-medium mt-auto">
                      {event.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" color="orange" size="3">
                Load More Events
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[24px] md:text-[28px] font-semibold mb-8 text-gray-900">
              Browse by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(1).map((category) => (
                <Button
                  key={category.value}
                  variant="surface"
                  size="3"
                  className="h-auto py-6 w-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <Footer5 className="mt-auto" />
      </div>
    </>
  );
}
