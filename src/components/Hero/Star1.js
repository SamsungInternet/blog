import React from "react";
import PropTypes from "prop-types";

const Star1 = props => {
  const { name } = props;

  return (
    <svg className={name} viewBox="0 0 8.87 8.45">
	  <path fill="#FFC800" d="M 8.87341,3.20475L 6.00867,2.49052L 4.4231,-2.00272e-005L 2.85858,2.50383L 0,3.24217L 1.89783,5.50383L 1.71667,8.45066L 4.4541,7.34465L 7.20074,8.42753L 6.99469,5.48234L 8.87341,3.20475 Z "/>
    </svg>
  );
};

Star1.propTypes = {
  name: PropTypes.string,
};

export default Star1;
