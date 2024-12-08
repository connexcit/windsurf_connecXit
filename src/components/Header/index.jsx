import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@radix-ui/themes';

export default function Header({ ...props }) {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google login successful:', response);
      navigate('/dashboard');
    },
    onError: () => {
      console.log('Google login failed');
    }
  });

  return (
    <header className={`${props.className} flex sm:flex-col justify-between items-center gap-5 bg-white-a700 px-4 md:px-6 lg:px-8 py-2`}>
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img 
          src="images/img_connecxit_logo.png" 
          alt="ConnecXit Logo" 
          className="h-[60px] md:h-[70px] lg:h-[90px] w-auto object-contain" 
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-1 max-w-[894px] items-center justify-end gap-6 md:gap-4 md:flex-col">
        {/* Action Buttons */}
        <div className="flex gap-3 md:gap-2 md:flex-wrap sm:flex-col">
          <Link to="/ctxeventtickets">
            <Button size="3" variant="solid" color="red" className="whitespace-nowrap">
              Get Tickets
            </Button>
          </Link>
          <Link to="/cxtsignup">
            <Button size="3" variant="solid" color="orange" className="whitespace-nowrap">
              <span className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7H16M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Join As An Event Pro
              </span>
            </Button>
          </Link>
          <Link to="/cxtsignup">
            <Button size="3" variant="solid" color="red" className="whitespace-nowrap">
              Join As A Vendor
            </Button>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-6 md:gap-4">
          <Link to="/explore" className="text-[15px] font-medium text-gray-900 hover:text-deep_orange-500 transition-colors">
            Explore
          </Link>
          <Link to="/signup" className="text-[15px] font-medium text-gray-900 hover:text-deep_orange-500 transition-colors">
            Member Sign up
          </Link>
          <button 
            onClick={() => login()} 
            className="flex items-center justify-center w-[30px] h-[30px] hover:opacity-80 transition-opacity"
          >
            <img 
              src="images/img_image_2.png" 
              alt="Google Login" 
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
