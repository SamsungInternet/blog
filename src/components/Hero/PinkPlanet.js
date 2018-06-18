import React from "react";
import PropTypes from "prop-types";

const PinkPlanet = props => {
  const { name } = props;

  return (
    <svg viewBox="0 0 31.9 31.9" className={name}>
      <circle fill="#792067"cx="15.9" cy="15.9" r="15.6"/>
      <circle fill="#FF0064" cx="15.9" cy="15.9" r="8.7"/>
    </svg>

  );
};

PinkPlanet.propTypes = {
  name: PropTypes.string
};

export default PinkPlanet;
