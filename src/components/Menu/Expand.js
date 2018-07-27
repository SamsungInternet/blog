import FaAngleDown from "react-icons/lib/fa/angle-down";
import PropTypes from "prop-types";
import React from "react";

const Expand = props => {
  const { onClick, theme } = props;

  return (
    <React.Fragment>
      <button className="more" to="#" onClick={onClick} aria-label="expand">
        <FaAngleDown size={30} />
      </button>

      {/* --- STYLES --- */}
      <style jsx>{`
        .more {
          cursor: pointer;
        }

        @below desktop {
          .more {
            background: #fafafa;
            border: 1px solid #ccc;
            border-radius: ${theme.size.radius.small} ${theme.size.radius.small} 0 0;
            border-bottom: none;
            position: absolute;
            left: 50%;
            top: -35px;
            width: 60px;
            height: 36px;
            color: white;
            overflow: hidden;
            z-index: 1;
            transform: translateX(-50%);

            &:focus {
              outline: none;

              :global(svg) {
                fill: ${theme.color.brand.primary};
              }
            }

            :global(svg) {
              transition: all 0.5s;
              transform: rotateZ(180deg);
              fill: ${theme.color.special.attention};
            }

            :global(.open) & :global(svg) {
              transform: rotateZ(0deg);
            }
          }
        }

        @from-width desktop {
          .more {
            display: flex;
            flex-shrink: 0;
            flex-grow: 0;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 38px;
            margin-left: 10px;
            padding: 0;
            border: 0;
            border-radius: ${theme.size.radius.small};
            background-color: color(white alpha(-50%));
            transition: background-color ${theme.time.duration.default};
            z-index: 1;

            &:hover, 
            &:focus, {
              background-color: color(white alpha(-20%));
            }

            :global(svg) {
              transition: all ${theme.time.duration.default};
            }

            :global(.open) & {
              background-color: color(white alpha(100%));
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              &:hover {
                background-color: color(white alpha(100%));
              }

              :global(svg) {
                transform: rotate(180deg);
              }
            }

            :global(.fixed) & {
              height: 30px;
            }
          }
        }

        @below tablet {
          .more {
            border-bottom: 0;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Expand.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default Expand;
