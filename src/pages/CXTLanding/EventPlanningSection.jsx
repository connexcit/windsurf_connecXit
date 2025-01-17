import { Button, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { useState, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import * as RadixSelect from '@radix-ui/react-select';

const eventTimingOptions = [
  { label: "This Week", value: "this_week" },
  { label: "Next Week", value: "next_week" },
  { label: "This Month", value: "this_month" },
  { label: "Next Month", value: "next_month" },
  { label: "Next 3 Months", value: "next_3_months" },
  { label: "Next 6 Months", value: "next_6_months" },
];

const resourceOptions = [
  { label: "Transportation", value: "transportation" },
  { label: "Catering", value: "catering" },
  { label: "Photography", value: "photography" },
  { label: "Venues", value: "venues" },
  { label: "DJ", value: "dj" },
  { label: "Live Entertainment", value: "live_entertainment" },
];

const plannerTypes = [
  { value: 'wedding', label: 'Wedding Planner' },
  { value: 'corporate', label: 'Corporate Event Planner' },
  { value: 'party', label: 'Party Planner' },
  { value: 'conference', label: 'Conference Planner' },
  { value: 'social', label: 'Social Event Planner' },
];

const profileList = [
  { profileImage: "images/img_rectangle_276_1.png", userName: "Sanderson Smith" },
  { profileImage: "images/img_rectangle_276_2.png", userName: "Elenora Winters" },
  { profileImage: "images/img_rectangle_276_3.png", userName: "Diane Brestal" },
  { profileImage: "images/img_rectangle_276_4.png", userName: "Tanya Evans" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    border: 'none',
    borderBottom: '1px solid #E6E6E6',
    borderRadius: '0',
    boxShadow: 'none',
    minHeight: '42px',
    '&:hover': {
      borderBottom: '1px solid #E6E6E6'
    }
  }),
  placeholder: (base) => ({
    ...base,
    color: '#000000',
    fontSize: '15px',
    letterSpacing: '-0.60px'
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#F0F0F0',
    borderRadius: '4px'
  })
};

export default function EventPlanningSection({ isEventPro, setIsEventPro }) {
  const navigate = useNavigate();
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedResources, setSelectedResources] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [selectedPlannerType, setSelectedPlannerType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reset fields when toggle changes
  useEffect(() => {
    setSelectedResources([]);
    setSelectedPlannerType('');
  }, [isEventPro]);

  const handleSearchClick = () => {
    navigate('/cxtlistpage');
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        {/* Heading */}
        <Heading
          size="heading5xl"
          as="h1"
          className="max-w-3xl text-center text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-2.40px] text-black-900_02"
        >
          <span className="text-black-900_02">Event </span>
          <span className="text-deep_orange-500">planning</span>
          <span className="text-black-900_02">, made easier.</span>
        </Heading>

        {/* Type Selector */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg p-1 bg-gray-100">
            <Button
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${
                isEventPro
                  ? 'bg-deep_orange-500 text-white shadow-md hover:bg-deep_orange-600'
                  : 'bg-gray-200 text-gray-700_02 hover:bg-gray-300'
              }`}
              onClick={() => setIsEventPro(true)}
            >
              HIRE an EVENT PRO (PLANNER)
            </Button>
            <Button
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${
                !isEventPro
                  ? 'bg-deep_orange-500 text-white shadow-md hover:bg-deep_orange-600'
                  : 'bg-gray-200 text-gray-700_02 hover:bg-gray-300'
              }`}
              onClick={() => setIsEventPro(false)}
            >
              FIND EVENT VENDOR(S)
            </Button>
          </div>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-3xl">
          {/* Search Fields */}
          <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[22px] border border-solid border-gray-300_01">
            {/* Event Date, Resources & Planner Type */}
            <div className="flex-1 space-y-4">
              <Select
                value={selectedTiming}
                onChange={setSelectedTiming}
                options={eventTimingOptions}
                placeholder="When is your event?"
                styles={customStyles}
                className="mb-4"
              />
              
              {/* Event Planner Type Dropdown - Only show when isEventPro is true */}
              {isEventPro ? (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">
                    What Type of Event Planner Do You Need?
                  </label>
                  <RadixSelect.Root 
                    value={selectedPlannerType} 
                    onValueChange={setSelectedPlannerType}
                    open={isDropdownOpen}
                    onOpenChange={setIsDropdownOpen}
                  >
                    <RadixSelect.Trigger 
                      className="flex items-center justify-between w-full px-0 py-2 border-b border-gray-300 hover:border-deep_orange-500 focus:outline-none"
                      aria-label="Event planner type"
                    >
                      <RadixSelect.Value placeholder="Select an event planner type" />
                      <RadixSelect.Icon>{isDropdownOpen ? '▲' : '▼'}</RadixSelect.Icon>
                    </RadixSelect.Trigger>

                    <RadixSelect.Portal>
                      <RadixSelect.Content 
                        className="z-50 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        position="popper"
                        sideOffset={5}
                      >
                        <RadixSelect.Viewport className="p-1">
                          {plannerTypes.map((type) => (
                            <RadixSelect.Item
                              key={type.value}
                              value={type.value}
                              className="relative flex items-center px-4 py-2 text-gray-900 rounded cursor-pointer select-none hover:bg-deep_orange-50 focus:bg-deep_orange-50 focus:outline-none"
                            >
                              <RadixSelect.ItemText>{type.label}</RadixSelect.ItemText>
                              <RadixSelect.ItemIndicator className="absolute right-2">
                                ✓
                              </RadixSelect.ItemIndicator>
                            </RadixSelect.Item>
                          ))}
                        </RadixSelect.Viewport>
                      </RadixSelect.Content>
                    </RadixSelect.Portal>
                  </RadixSelect.Root>
                </div>
              ) : (
                /* Resources Multi-select - Only show when isEventPro is false */
                <Select
                  className="flex flex-col gap-1.5 self-stretch"
                  placeholder="What type of vendors do you need (you can choose more than one)"
                  isMulti
                  value={selectedResources}
                  onChange={setSelectedResources}
                  options={resourceOptions}
                  styles={customStyles}
                />
              )}
            </div>

            {/* Zip Code & Search Button */}
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <div className="flex-shrink-0">
                <input
                  type="text"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  placeholder="Enter ZIP code"
                  className="w-full md:w-[120px] px-3 py-2 border-b border-gray-300 focus:border-deep_orange-500 focus:outline-none"
                />
              </div>
              <Button
                className="bg-deep_orange-500 hover:bg-deep_orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Event Planner Profiles - Only show when isEventPro is true */}
        {isEventPro && (
          <div className="w-full mt-12">
            <div className="text-center mb-8">
              <Heading
                size="heading4xl"
                as="h3"
                className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
              >
                <span className="text-black-900_02">Hire </span>
                <span className="text-deep_orange-500">top event planners</span>
                <span className="text-black-900_01">.</span>
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Suspense fallback={<div className="text-center py-8">Loading profiles...</div>}>
                {profileList.map((profile, index) => (
                  <UserProfile 
                    key={index}
                    {...profile}
                    className="w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
