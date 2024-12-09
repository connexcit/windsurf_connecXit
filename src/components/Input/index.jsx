import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700",
  },
  outline: {
    gray_300_01: "border-gray-300_01 border border-solid text-gray-700_03",
    gray_500: "border-gray-500 border border-solid text-black-900_02",
  },
};

const sizes = {
  lg: "h-[94px] px-3",
  sm: "h-[36px] px-3.5 text-[15px]",
  xs: "h-[32px] px-[26px] text-[15px]",
  md: "h-[36px] px-3.5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "md",
      color = "gray_500",
      ...restProps
    },
    ref,
  ) => {
    const inputClassName = "w-full bg-transparent border-0 outline-none text-black-900_02";
    
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input 
          ref={ref} 
          type={type} 
          name={name} 
          placeholder={placeholder} 
          onChange={onChange} 
          className={inputClassName}
          {...restProps} 
        />
        {!!suffix && suffix}
      </label>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "gray_300_01", "gray_500"]),
  onChange: PropTypes.func,
};

export { Input };
