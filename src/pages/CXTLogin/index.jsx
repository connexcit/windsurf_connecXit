import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, CheckBox, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header2 from "../../components/Header2";
import React from "react";

export default function CXTLoginPage() {
  return (
    <>
      <Helmet>
        <title>Login - Connect & Access Your Account</title>
        <meta
          name="description"
          content="Welcome back! Log in to your account to explore events, connect with vendors, and access exclusive offers. Join our community today."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[76px] bg-white-a700 md:gap-[57px] sm:gap-[38px]">
        <Header2 />
        <div className="flex flex-col items-center gap-[88px] md:gap-[66px] sm:gap-11">
          <div className="mt-[76px] flex w-[36%] flex-col items-center gap-6 md:w-full md:px-5">
            <Heading
              size="heading3xl"
              as="h1"
              className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
            >
              <span className="text-black-900_02">Welcome&nbsp;</span>
              <span className="text-deep_orange-500">back</span>
            </Heading>
            <div className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-4 py-6 sm:py-5">
              <div className="mb-2.5 flex flex-col items-center">
                <div className="mx-1.5 flex flex-col items-start gap-1 self-stretch md:mx-0">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    Email
                  </Text>
                  <Input shape="square" name="Email Input" className="self-stretch !border px-3.5" />
                </div>
                <div className="mx-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mx-0">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    Password
                  </Text>
                  <Input shape="square" name="Password Input" className="self-stretch !border px-3.5" />
                </div>
                <div className="ml-2 mr-1 mt-4 flex justify-between gap-5 self-stretch md:mx-0">
                  <CheckBox
                    name="Remember Checkbox"
                    label="Remember me"
                    id="RememberCheckbox"
                    className="gap-3 text-[14px] tracking-[-0.56px] text-gray-800_01"
                  />
                  <a href="#">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[14px] font-normal tracking-[-0.56px] text-deep_orange-500"
                    >
                      Forgot password?
                    </Text>
                  </a>
                </div>
                <a href="#" className="mt-5">
                  <Heading
                    size="headings"
                    as="h2"
                    className="text-[14px] font-semibold tracking-[-0.56px] text-white-a700"
                  >
                    Log in
                  </Heading>
                </a>
                <div className="ml-2.5 mr-1.5 mt-6 flex items-center justify-center self-stretch md:mx-0 sm:flex-col">
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
                <div className="relative ml-2 mt-7 h-[94px] content-center self-stretch md:ml-0 md:h-auto">
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
                        alt="Facebook Icon"
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
                  className="ml-2.5 mr-3.5 mt-3.5 gap-3 self-stretch !border px-[33px] tracking-[-0.56px] md:mx-0 sm:px-5"
                >
                  Sign up with Google
                </Button>
              </div>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Text size="textlg" as="p" className="text-[14px] font-normal tracking-[-0.56px] text-gray-800">
                <span className="text-gray-800">Don’t have an account?&nbsp;</span>
                <span className="text-green-800">&nbsp;</span>
                <span className="text-deep_orange-500">Sign up</span>
              </Text>
            </a>
          </div>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
