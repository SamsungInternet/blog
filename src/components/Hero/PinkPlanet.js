import React from "react";
import PropTypes from "prop-types";

const PinkPlanet = props => {
  const { name } = props;

  return (
    <svg viewBox="0 0 24.13 24.13">
      <path
        fill="#FF0064"
        d="M 12.0625,4.00543e-005C 18.7244,4.00543e-005 24.1251,5.40067 24.1251,12.0625C 24.1251,18.7245 18.7244,24.125 12.0625,24.125C 5.40054,24.125 0,18.7245 0,12.0625C 0,5.40067 5.4006,4.00543e-005 12.0625,4.00543e-005 Z "/>
      <ellipse fill="#FF0064" cx="12.0625" cy="12.0625" rx="8.67203" ry="8.67203" />
    </svg>
  );
};

PinkPlanet.propTypes = {
  name: PropTypes.string
};

export default PinkPlanet;
