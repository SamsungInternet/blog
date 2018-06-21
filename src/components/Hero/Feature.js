import React from "react";
import Corner from "../../layouts/corner";

const Feature = props => {

  const title = "Performance Testing Web Assembly vs JavaScript";
  const image = "https://cdn-images-1.medium.com/max/1600/1*g09zv9WuuH00KfVisRPAOg.png";

  return (
    <React.Fragment>
      <section className="feature">
        <img src={image} />
        <h2>{title}</h2>
        <Corner type="feature" icon="star" />
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .feature {
          grid-area: feature;
          width: 100%;
          height: 100%;
          background-color: grey;
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
          border: 1px solid #1d3869;
          position: relative;
          z-index: 2;
        }

        h2 {
          background-color: rgba(29, 56, 105, 0.85);
          color: white;
          position: absolute;
          bottom: 20px;
          width: 100%;
          padding: 10px;
          line-height: 1.4em;
          font-size: 1.1em;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .corner {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 80px;
          height: 80px;
          border-bottom-right-radius: 100%;
          color: white;
          background-color: #706cf5;
        }

        .feature-text {
          text-indent: -999px;
          display: block;
          float: left;
        }

        :global(.icon) {
          margin: 10px;
        }

        @from-width tablet {
          h2 {
            padding: 20px;
            font-size: 1.6em;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Feature;
