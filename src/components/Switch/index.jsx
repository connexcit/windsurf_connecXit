import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtFillBluegray100: {
    offColor: "#cdcdcd",
    onColor: "#108a00",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
  },
};
const sizes = {
  xs: {
    width: 44,
    height: 22,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillBluegray100",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillBluegray100"]),
};

export { Switch };
