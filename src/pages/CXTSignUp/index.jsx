import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Text, Heading } from "../../components";
import Footer31 from "../../components/Footer31";
import { useNavigate } from "react-router-dom";

export default function CXTSignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[^a-zA-Z0-9]/.test(password),
    };
    return requirements;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordReqs = validatePassword(formData.password);
      if (!Object.values(passwordReqs).every(Boolean)) {
        newErrors.password = 'Password must include lowercase, uppercase, number, and special character';
      }
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage(null);
    setErrors({});

    try {
      const response = await fetch('http://localhost:3005/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        });
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        if (data.errors) {
          // Handle validation errors
          const newErrors = {};
          data.errors.forEach(error => {
            newErrors[error.path] = error.msg;
          });
          setErrors(newErrors);
          setMessage({ type: 'error', text: 'Please fix the validation errors below.' });
        } else {
          setMessage({ type: 'error', text: data.message || 'Registration failed. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ type: 'error', text: 'An error occurred during registration. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - ConnecXit</title>
        <meta
          name="description"
          content="Create your ConnecXit account to start connecting with event planners and service providers."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-a700 md:gap-[67px] sm:gap-[45px]">
        <div className="flex w-[36%] flex-col items-center gap-6 md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            Create an Account
          </Heading>
          <form onSubmit={handleSubmit} className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-4 py-[22px] sm:py-5">
            <div className="ml-2 mt-5 flex flex-col items-start md:ml-0">
              {message && (
                <div className={`mb-4 w-full rounded p-3 ${message.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {message.text}
                </div>
              )}
              <div className="mr-1.5 flex items-center gap-2 self-stretch md:mr-0 sm:flex-col">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                    First Name
                  </Text>
                  <Input
                    shape="square"
                    size="md"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full h-[36px] !border ${errors.firstName ? '!border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <Text className="mt-1 text-xs text-red-500">{errors.firstName}</Text>
                  )}
                </div>
                <div className="flex flex-1 flex-col items-start gap-1">
                  <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                    Last Name
                  </Text>
                  <Input
                    shape="square"
                    size="md"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full h-[36px] !border ${errors.lastName ? '!border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <Text className="mt-1 text-xs text-red-500">{errors.lastName}</Text>
                  )}
                </div>
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                  Email
                </Text>
                <Input
                  shape="square"
                  size="md"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full h-[36px] !border ${errors.email ? '!border-red-500' : ''}`}
                />
                {errors.email && (
                  <Text className="mt-1 text-xs text-red-500">{errors.email}</Text>
                )}
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                  Phone Number
                </Text>
                <Input 
                  shape="square" 
                  size="md"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full h-[36px] !border ${errors.phoneNumber ? '!border-red-500' : ''}`}
                />
                {errors.phoneNumber && (
                  <Text className="mt-1 text-xs text-red-500">{errors.phoneNumber}</Text>
                )}
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                  Password
                </Text>
                <Input
                  shape="square"
                  size="md"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className={`w-full h-[36px] !border ${errors.password ? '!border-red-500' : ''}`}
                />
                {errors.password && (
                  <Text className="mt-1 text-xs text-red-500">{errors.password}</Text>
                )}
              </div>
              <div className="mr-1.5 mt-6 flex flex-col items-start gap-1 self-stretch md:mr-0">
                <Text as="p" className="text-[13px] font-normal tracking-[-0.40px] text-black-900_02">
                  Confirm Password
                </Text>
                <Input
                  shape="square"
                  size="md"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className={`w-full h-[36px] !border ${errors.confirmPassword ? '!border-red-500' : ''}`}
                />
                {errors.confirmPassword && (
                  <Text className="mt-1 text-xs text-red-500">{errors.confirmPassword}</Text>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                shape="round"
                disabled={loading}
                className="mt-6 w-full rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </div>
          </form>
        </div>
        <Footer31 className="bg-white-a700 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
}
