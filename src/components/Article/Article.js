import React from "react";
import PropTypes from "prop-types";
          
import Bg from "../../images/png/hero-background.png";

const Article = props => {
  const { children, theme, type } = props;
  return (
    <React.Fragment>
      <article className={`article ${type}`}>{children}</article>

      {/* --- STYLES --- */}
      <style jsx>{`
        .article {
          padding: ${theme.space.inset.default};
          margin: 0 auto;
        }

        :global(.profile) {
          background-color: white;
          padding: 0.1em 2em;
        }

        .docs, .team {
          padding-left: 0;
          padding-right: 0;
          max-width: 100%;
          background: url(${Bg}) ${theme.hero.backgroundColor} repeat;
          background-attachment: fixed;
        }

        :global(.docs h1), 
        :global(.team h1) {
          text-align: center;
          color: white;
        }

        @from-width tablet {
          .article {
            padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
            max-width: ${theme.text.maxWidth.tablet};
          }
          .docs, .team {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
          }
          :global(.team .profiles) {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 40px; 
            padding: 40px;       
          }
        }

        @from-width desktop {
          .article {
            padding: ${`calc(${theme.space.default} * 2 + 90px) 0 calc(${
              theme.space.default
            } * 2)`};
            max-width: 960px;
          }
          .docs, .team {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
          }
          .team {
            padding-left: 40px;
            padding-right: 40px;
          }
          :global(.team .profiles) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;  
            padding: 0;         
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default Article;
