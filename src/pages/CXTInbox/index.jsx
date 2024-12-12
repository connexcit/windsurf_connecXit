import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CXTInboxPage() {
  return (
    <>
      <Helmet>
        <title>Inbox - Manage Your Conversations and Projects</title>
        <meta
          name="description"
          content="Access your inbox to keep track of conversations, project reminders, and bookings. Connect with top event planners and vendors like photographers, caterers, and more."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Messages</h1>
              
              {/* Placeholder for messages */}
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 font-semibold">CM</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Chef Maria</h3>
                      <p className="text-gray-600">Thanks for your interest! I'd be happy to discuss your event...</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 font-semibold">JD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-gray-600">Looking forward to our upcoming event planning session...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer className="mt-auto" />
      </div>
    </>
  );
}
