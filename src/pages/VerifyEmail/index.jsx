import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Footer31 from "../../components/Footer31";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('verifying'); // verifying, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      if (!token) {
        setStatus('error');
        setMessage('Invalid verification link');
        return;
      }

      try {
        const response = await fetch(`/api/verify-email/${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message);
          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.message);
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred during email verification');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <>
      <Helmet>
        <title>Email Verification - ConnecXit</title>
        <meta
          name="description"
          content="Verify your email address to complete your registration with ConnecXit."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-a700 md:gap-[67px] sm:gap-[45px]">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm w-full" />
        <div className="flex w-[36%] flex-col items-center gap-6 md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            Email Verification
          </Heading>
          <div className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 p-8">
            {status === 'verifying' && (
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-deep_orange-500 border-t-transparent"></div>
                <Text className="text-lg text-center">Verifying your email address...</Text>
              </div>
            )}
            
            {status === 'success' && (
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Text className="text-lg text-center text-green-600">{message}</Text>
                <Text className="text-sm text-center text-gray-500">Redirecting to login page...</Text>
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <Text className="text-lg text-center text-red-600">{message}</Text>
                <Button
                  size="lg"
                  shape="round"
                  onClick={() => navigate('/signup')}
                  className="mt-4"
                >
                  Back to Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
        <Footer31 className="bg-white-a700 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
}
