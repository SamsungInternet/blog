import React from "react";
import PropTypes from "prop-types";
          
import Bg from "../../images/png/hero-background.png";

const Article = props => {
  const { children, theme, type } = props;
  console.log(type);

  return (
    <React.Fragment>
      <article className={`article ${type}`}>{children}</article>

      {/* --- STYLES --- */}
      <style jsx>{`
        .article {
          padding: ${theme.space.inset.default};
          margin: 0 auto;
        }

        .docs {
          padding-left: 0;
          padding-right: 0;
          max-width: 100%;
          background: url(${Bg}) ${theme.hero.backgroundColor} repeat;
          background-attachment: fixed;
        }
        :global(.docs h1) {
          text-align: center;
          color: white;
        }
        @from-width tablet {
          .article {
            padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
            max-width: ${theme.text.maxWidth.tablet};
          }
          .docs {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
          }
         
        }
        @from-width desktop {
          .article {
            padding: ${`calc(${theme.space.default} * 2 + 90px) 0 calc(${
              theme.space.default
            } * 2)`};
            max-width: ${theme.text.maxWidth.desktop};
          }
          .docs {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
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
