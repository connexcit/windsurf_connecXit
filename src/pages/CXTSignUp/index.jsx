import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Input } from "../../components";
import Footer31 from "../../components/Footer31";
import Header6 from "../../components/Header6";
import React from "react";

export default function CXTSignUpPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up - Create Your New Account</title>
        <meta
          name="description"
          content="Create your account to join as an Event Pro or Vendor. Discover a world of opportunities and partnerships. Sign up easily with just a few clicks."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-a700 md:gap-[67px] sm:gap-[45px]">
        <Header6 className="self-stretch" />
        <div className="flex w-[36%] flex-col items-center gap-3.5 md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-black-900_02">Create your&nbsp;</span>
            <span className="text-deep_orange-500">account</span>
          </Heading>
          <div className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-4 py-[22px] sm:py-5">
            <div className="ml-2 mt-5 flex flex-col items-start md:ml-0">
              <div className="mr-1.5 flex items-center gap-2 self-stretch md:mr-0 sm:flex-col">
                <div className="flex w-full flex-col items-start gap-1 sm:w-full">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    First Name
                  </Text>
                  <Input shape="square" name="First Name Input" className="self-stretch !border px-3.5" />
                </div>
                <div className="flex w-full flex-col items-start gap-0.5 sm:w-full">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    Last Name
                  </Text>
                  <Input shape="square" name="Last Name Input" className="self-stretch !border px-3.5" />
                </div>
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  Email
                </Text>
                <Input shape="square" name="Email Input" className="self-stretch !border px-3.5" />
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  Password
                </Text>
                <Input shape="square" name="Password Input" className="self-stretch !border px-3.5" />
              </div>
              <Text size="textlg" as="p" className="mt-3.5 text-[14px] font-normal tracking-[-0.56px] text-gray-500_03">
                Your password must:
              </Text>
              <div className="mt-1.5 flex items-center gap-[11px] self-stretch">
                <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
                <Text size="textlg" as="p" className="text-[14px] font-normal tracking-[-0.56px] text-gray-500_03">
                  be 8 to 71 characters long
                </Text>
              </div>
              <div className="mt-1 flex items-center gap-[11px] self-stretch">
                <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
                <Text size="textlg" as="p" className="text-[14px] font-normal tracking-[-0.56px] text-gray-500_03">
                  not contain your name or email
                </Text>
              </div>
              <div className="relative mr-1.5 mt-1 h-[108px] self-stretch md:mr-0">
                <Text
                  size="textlg"
                  as="p"
                  className="absolute left-0 right-0 top-0 m-auto w-[96%] text-[14px] font-normal leading-[144.7%] tracking-[-0.56px] text-gray-500_03"
                >
                  not be commonly used, easily guessed or contain any variation of the word “Thumbtak”
                </Text>
                <Text
                  size="textlg"
                  as="p"
                  className="absolute bottom-0 left-0 right-0 m-auto w-[96%] text-[14px] font-normal leading-[144.7%] tracking-[-0.56px] text-gray-800"
                >
                  <span className="text-gray-800">By clicking Create Account, you agree to the</span>
                  <span className="text-green-800">&nbsp;</span>
                  <span className="text-deep_orange-500">Terms of Use</span>
                  <span className="text-gray-800">&nbsp;and&nbsp;</span>
                  <span className="text-deep_orange-500">Privacy Policy.</span>
                </Text>
                <div className="absolute left-0 top-2 m-auto h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
              </div>
              <div className="relative mx-1 mt-3.5 h-[36px] content-end self-stretch md:mx-0 md:h-auto">
                <a href="#" className="mx-auto">
                  <Heading
                    size="headings"
                    as="h2"
                    className="text-[14px] font-semibold tracking-[-0.56px] text-white-a700"
                  >
                    Create Account
                  </Heading>
                </a>
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Button
                    size="lg"
                    shape="round"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5"
                  >
                    Create Account
                  </Button>
                </a>
              </div>
              <div className="mr-1.5 mt-[22px] flex items-center self-stretch md:mr-0 sm:flex-col">
                <div className="h-px flex-1 bg-gray-500_02 sm:self-stretch" />
                <Text
                  size="textlg"
                  as="p"
                  className="ml-[18px] text-[14px] font-normal tracking-[-0.56px] text-gray-800 sm:ml-0"
                >
                  Or
                </Text>
                <div className="ml-6 h-px flex-1 bg-gray-500_02 sm:ml-0 sm:self-stretch" />
              </div>
              <div className="mt-7 self-stretch">
                <div className="flex flex-col gap-3.5">
                  <div className="relative h-[94px] content-center md:h-auto">
                    <div className="mx-auto flex-1">
                      <div className="relative z-[1] flex flex-col">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-[14px] font-normal leading-[144.7%] tracking-[-0.56px] text-gray-800"
                        >
                          <span className="text-gray-800">By clicking Sign up with Facebook or Sign up with</span>
                          <span className="text-green-800">&nbsp;</span>
                          <span className="text-deep_orange-500">Google</span>
                          <span className="text-gray-800">&nbsp;you agree to the &nbsp;</span>
                          <span className="text-deep_orange-500">Terms of Use</span>
                          <span className="text-green-800">&nbsp;</span>
                          <span className="text-gray-800">and</span>
                          <span className="text-green-800">&nbsp;</span>
                          <span className="text-deep_orange-500">Privacy Policy.</span>
                        </Text>
                        <Img
                          src="images/img_facebook_svgrepo_com.svg"
                          alt="Facebook Logo"
                          className="relative ml-40 mt-[-14px] h-[16px] w-[16px] md:ml-0"
                        />
                      </div>
                      <div className="relative mr-3.5 mt-[-26px] h-[36px] border border-solid border-gray-500 md:mr-0" />
                    </div>
                    <Text
                      size="textlg"
                      as="p"
                      className="absolute bottom-[6.93px] right-[31%] z-[2] m-auto text-[14px] font-normal tracking-[-0.56px] text-gray-800"
                    >
                      Sign up with Facebook
                    </Text>
                  </div>
                  <Button
                    color="gray_500"
                    size="lg"
                    variant="outline"
                    shape="square"
                    leftIcon={
                      <Img
                        src="images/img_googleiconlogosvgrepocom_1.svg"
                        alt="Google-icon-logo-svgrepo-com 1"
                        className="mb-1 h-[14px] w-[14px]"
                      />
                    }
                    className="mr-3.5 gap-3 self-stretch !border px-[33px] tracking-[-0.56px] md:mr-0 sm:px-5"
                  >
                    Sign up with Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer31 />
      </div>
    </>
  );
}
