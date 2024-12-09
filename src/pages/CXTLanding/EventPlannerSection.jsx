import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useState } from "react";
import * as Select from '@radix-ui/react-select';

const profileList = [
  { profileImage: "images/img_rectangle_276_1.png", userName: "Sanderson Smith" },
  { profileImage: "images/img_rectangle_276_2.png", userName: "Elenora Winters" },
  { profileImage: "images/img_rectangle_276_3.png", userName: "Diane Brestal" },
  { profileImage: "images/img_rectangle_276_4.png", userName: "Tanya Evans" },
];

const plannerTypes = [
  { value: 'wedding', label: 'Wedding Planner' },
  { value: 'corporate', label: 'Corporate Event Planner' },
  { value: 'party', label: 'Party Planner' },
  { value: 'conference', label: 'Conference Planner' },
  { value: 'social', label: 'Social Event Planner' },
];

const EventPlannerSection = ({ isEventPro }) => {
  const [selectedType, setSelectedType] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  if (!isEventPro) {
    return null;
  }

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Event Planner Type Dropdown */}
        <div className="max-w-md mx-auto mb-12">
          <label className="block text-lg font-medium text-gray-900 mb-3">
            What Type of Event Planner Do You Want?
          </label>
          <Select.Root 
            value={selectedType} 
            onValueChange={setSelectedType}
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <Select.Trigger 
              className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-deep_orange-500 focus:outline-none focus:ring-2 focus:ring-deep_orange-500 focus:border-deep_orange-500"
              aria-label="Event planner type"
            >
              <Select.Value placeholder="Select a planner type" />
              <Select.Icon>{isOpen ? '▲' : '▼'}</Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content 
                className="z-50 min-w-[200px]"
                position="popper"
                sideOffset={5}
              >
                <Select.Viewport>
                  {plannerTypes.map((type) => (
                    <Select.Item
                      key={type.value}
                      value={type.value}
                      className="relative flex items-center text-gray-900"
                    >
                      <Select.ItemText>{type.label}</Select.ItemText>
                      <Select.ItemIndicator className="absolute right-2">
                        ✓
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Profile Grid */}
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
    </section>
  );
};

export default EventPlannerSection;
