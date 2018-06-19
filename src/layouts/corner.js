import React from "react";
import FaStar from "react-icons/lib/fa/star-o";
import Icon from "../utils/icon"

const Feature = props => {
  const { type, icon } = props;

  return (
    <React.Fragment>
        <span className="corner corner-feature">
          <span className={`${type}-text`}>{type}</span>
          <Icon icon={icon} fill="#3d3d3d" width="30px" height="30px"/>
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

        .feature-text {
          text-indent: -999px;
          display: block;
          float: left;
        }

        :global(.star-icon) {
          margin: 8px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Feature;
