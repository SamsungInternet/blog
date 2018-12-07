import React from "react";
import Corner from "../../layouts/corner";

const Feature = props => {

  const title = "A Crisis of Permissions";
  const image = "https://cdn-images-1.medium.com/max/1000/1*k7jyt8okLpikXnuh09nq7A.png";
  const url = "/a-crisis-of-permissions/";

  return (
    <React.Fragment>
      <section className="feature">
        <a href={url}>
          <img src={image} alt="An illustration of a webpage with multiple pop-up windows"/>
          <h2>{title}</h2>
          <Corner type="feature" icon="star" />
        </a>
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
          z-index: 1;
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
          display: block;
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
