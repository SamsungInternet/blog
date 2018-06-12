import React from "react";
import PropTypes from "prop-types";

const Star2 = props => {
  const { name } = props;

  return (
    <svg viewBox="0 0 7.33 7.33">
	    <path fill="#FFFFFF" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 3.66644,0C 5.69135,0 7.33289,1.64148 7.33289,3.66638C 7.33289,5.69141 5.69141,7.33289 3.66644,7.33289C 1.64148,7.33289 0,5.69141 0,3.66638C 0,1.64148 1.64154,0 3.66644,0 Z "/>
    </svg>
  );
};

Star2.propTypes = {
  name: PropTypes.string
};

export default Star2;
