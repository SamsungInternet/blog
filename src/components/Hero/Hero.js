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

  // `window` is unavailable in production build context
  const pageWidth = typeof window !== 'undefined' ? window.innerWidth + 160 : 400;

  const rocketAngle = Math.atan(props.heroHeight/pageWidth);

  return (
    <React.Fragment>
      <section className="hero">
        <Ship name="ship" />
        <Moon name="moon" />
        <Star1 name="star1" />
        <Star2 name="star2" />
        <PinkPlanet name="pp1" />
        <GreenPlanet name="gp1" />
        <div className="hero-info">
          <h1 className="intro">Welcome to the Developer Hub for the web browser Samsung Internet.</h1>
          <p>Here you will find demos, articles and documentation to help you make the most of the latest web features in Samsung Internet and other browsers too.</p>
          <Feature />
        </div>

      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          background: url(${Bg}) ${theme.hero.backgroundColor} repeat;
          overflow: hidden;
          min-height: 50vh;
          min-height: 100px;
          position: relative;
          padding: 1em;
          padding-top: ${theme.header.height.homepage};
          text-shadow:
              -1px -1px 2px  ${theme.hero.backgroundColor},
              1px -1px 2px ${theme.hero.backgroundColor},
              -1px 1px 2px  ${theme.hero.backgroundColor},
              1px 1px 2px  ${theme.hero.backgroundColor};
        }

        .hero-info {
          max-width: 1600px;
          margin: 0 auto;
        }

        .intro {
          position: relative;
        }

        h1 {
          grid-area: h1;
          font-size: ${theme.hero.h1.size};
          margin: 1em 0;
          color: ${theme.hero.h1.color};
          text-remove-gap: both 0 "Open Sans";
          z-index: 1;
        }

        p {
          grid-area: h2;
          margin-bottom: 40px;
          font-size: ${theme.hero.h2.size};
          font-weight: normal;
          color: ${theme.hero.h1.color};
          z-index: 1;
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
          position: absolute;
          display: block;
          width: 60px;
          animation: spin1 700s infinite linear;
          flex-shrink: 0;
          transform-origin: -250px -300px;
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
          top: 10%;
          display: block;
          width: 10px;
          animation: spin1 250s infinite linear;
          flex-shrink: 0;
          transform-origin: 250px 70px;
        }

        :global(.pp1) {
          position: absolute;
          left: 60%;
          top: 20%;
          display: block;
          width: 40px;
          animation: spin1 500s infinite linear;
          flex-shrink: 0;
          transform-origin: -100px 270px;
        }

        :global(.gp1) {
          position: absolute;
          display: block;
          width: 40px;
          animation: spin1 400s infinite linear;
          flex-shrink: 0;
          transform-origin: 60px -50px;
          left: 10%;
          bottom: 40%;
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
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }
        }

        @from-width tablet {
          .hero {
            padding: ${theme.space.inset.l};
            padding-top: ${theme.header.height.homepage};
          }
        }

        @from-width desktop {
          .hero-info {
            display: grid;
            grid-template:
            "h1 feature" auto
            "h2 feature" auto /
            auto 650px;
            grid-gap: 40px;
          }
          h1 {
            font-size: 2.3vw;
            margin-bottom: 0;
          }
          h2 {
            font-size: 1.5vw;
            margin-bottom: 0;
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
