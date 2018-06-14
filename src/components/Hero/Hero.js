import React from "react";
import PropTypes from "prop-types";

import FaArrowDown from "react-icons/lib/fa/arrow-down";
import Ship from "./Ship.js";
import Moon from "./Moon.js";
import Star1 from "./Star1.js";
import PinkPlanet from "./PinkPlanet.js";
import Star2 from "./Star2.js";
import GreenPlanet from "./GreenPlanet.js";

const Hero = props => {
  const { theme } = props;

  const pageWidth = window.outerWidth;

  return (
    <React.Fragment>
      <section className="hero">
        <Ship name="ship" />
        <Moon name="moon" />
        <Star1 name="star1" />
        <Star2 name="star2" />
        <PinkPlanet name="pp1" />
        <GreenPlanet name="gp1" />
        <h1>
          Welcome to the <br />
          Samsung Internet<br />
          Developer Hub
        </h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background-color: ${theme.hero.backgroundColor};
          color: ${theme.text.color.primary.inverse};
          display: flex;
          overflow: hidden;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 50vh;
          height: 100px;
          position: relative;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          z-index: 1;

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        :global(.ship) {
          display: block;
          width: 100px;
          flex-shrink: 0;
          position: absolute;
          bottom: -40px;
          right: -40px;
          transform: rotate(30deg);
        }

        :global(.moon) {
          display: block;
          width: 60px;
          animation: spin1 300s infinite linear;
          flex-shrink: 0;
          transform-origin: 250px 300px;
        }

        :global(.star1) {
          display: block;
          width: 40px;
          animation: spin1 200s infinite linear;
          flex-shrink: 0;
          transform-origin: 250px 270px;
        }

        @keyframes spin1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @from-width tablet {
          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }
        }

        @from-width desktop {
          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Hero;
