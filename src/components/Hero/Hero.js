import React from "react";
import PropTypes from "prop-types";

import Ship from "./Ship.js";
import Moon from "./Moon.js";
import Star1 from "./Star1.js";
import PinkPlanet from "./PinkPlanet.js";
import Star2 from "./Star2.js";
import GreenPlanet from "./GreenPlanet.js";
import Feature from "./Feature";
import Bg from "../../images/png/hero-background.png";

const Hero = props => {
  const { theme } = props;

  const pageWidth = window.innerWidth;

  const rocketAngle = Math.atan(props.heroHeight/pageWidth);

  return (
    <React.Fragment>
      <section className="hero">
        <Feature />
        <Ship name="ship" />
        <Moon name="moon" />
        <Star1 name="star1" />
        <Star2 name="star2" />
        <PinkPlanet name="pp1" />
        <GreenPlanet name="gp1" />
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          background: url(${Bg}) ${theme.hero.backgroundColor} repeat;
          color: ${theme.text.color.primary.inverse};
          overflow: hidden;
          min-height: 50vh;
          height: 100px;
          position: relative;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
          text-shadow: 0px 0px 10px ${theme.hero.backgroundColor};
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
          width: 160px;
          flex-shrink: 0;
          position: absolute;
          bottom: 0px;
          right: -160px;
          transform: rotate(30deg);
          animation: rocket 5s linear;
          animation-delay: 4s;
        }

        :global(.moon) {
          display: block;
          width: 60px;
          animation: spin1 300s infinite linear;
          flex-shrink: 0;
          transform-origin: 250px 300px;
        }

        :global(.star1) {
          position: absolute;
          left: 70%;
          top: 30%;
          display: block;
          width: 20px;
          animation: spin1 320s infinite linear;
          flex-shrink: 0;
          transform-origin: 200px 70px;
        }

        :global(.star2) {
          position: absolute;
          left: 90%;
          top: 90%;
          display: block;
          width: 10px;
          animation: spin1 250s infinite linear;
          flex-shrink: 0;
          transform-origin: -250px 70px;
        }

        :global(.pp1) {
          position: absolute;
          left: 60%;
          top: 80%;
          display: block;
          width: 40px;
          animation: spin1 500s infinite linear;
          flex-shrink: 0;
          transform-origin: 0px 270px;
        }

        :global(.gp1) {
          position: absolute;
          display: block;
          width: 40px;
          animation: spin1 400s infinite linear;
          flex-shrink: 0;
          transform-origin: -500px -200px;
          left: 10%;
        }

        @keyframes rocket {
          0% {
            transform: translate(0, 0) rotate(${rocketAngle}rad);
          }

          100% {
            transform: translate(-${pageWidth}px, -${props.heroHeight}px) rotate(${rocketAngle}rad);
          }
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
