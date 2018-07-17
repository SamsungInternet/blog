import React from "react";
import PropTypes from "prop-types";

import Icon from "../utils/icon"

const Feature = props => {
  const { type, icon } = props;

  return (
    <React.Fragment>
        <span className="corner corner-feature">
          <span className="corner-text">{type}</span>
          <Icon name="corner" icon={icon.toLowerCase()} fill="#3d3d3d" width="50px" height="50px"/>
        </span>

      {/* --- STYLES --- */}
      <style jsx>{`
        .corner {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 60px;
          height: 60px;
          border-bottom-right-radius: 100%;
          border-top-left-radius: 10px;

          color: white;
            background-color: #ecebea;
          }

        .corner-text {
          text-indent: -999px;
          display: block;
          float: left;
          overflow: hidden;
          height: 1px;
        }

        :global(.corner-icon) {
          margin: 0px;
        }
      `}</style>
    </React.Fragment>
  );
};

Feature.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string
};

export default Feature;
