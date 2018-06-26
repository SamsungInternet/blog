import React from "react";
import PropTypes from "prop-types";

const Bodytext = props => {
  const { html, theme, type } = props;

  return (
    <React.Fragment>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />

      <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: ${theme.time.duration.long};

          :global(h2),
          :global(h3) {
            margin: 1.5em 0 1em;
          }

          :global(h2) {
            line-height: ${theme.font.lineHeight.s};
            font-size: ${theme.font.size.l};
          }

          :global(h3) {
            font-size: ${theme.font.size.m};
            line-height: ${theme.font.lineHeight.m};
          }

          :global(p) {
            font-size: ${theme.font.size.s};
            line-height: ${theme.font.lineHeight.xxl};
            margin: 0 0 1.5em;
          }
        
          :global(a) {
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.brand.primary};
            text-decoration: underline;
          }
          :global(a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 2.5em 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            border: 1px solid ${theme.line.color};
          }
          :global(code.language-text) {
            background: ${theme.color.neutral.gray.c};
            text-shadow: none;
            color: inherit;
            padding: 0.1em 0.3em 0.2em;
            border-radius: 0.1em;
            word-wrap: wrap;
          }
          :global(img) {
            max-width: 100%;
          }
          :global(pre) {
            max-width: 100%;
          }
          :global(blockquote) {
            border-left: 8px solid #ccc;
            padding-left: 10px;
            font-style: italic;
          }
          :global(.doclist) {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 20px;
            padding: 20px;
          }
          :global(.doclist-item) {
            text-align: center;
          }
          :global(.doclist-link img) {
            display: block;
            margin: 20px auto;
            max-width: 120px;
          }
          :global(.green) {
            background-color: hsl(187, 53%, 28%);
            &:hover {
              background-color: hsl(187, 53%, 38%);
            }
          }
          :global(.blue) {
            background-color: hsl(237, 53%, 33%);
            &:hover {
              background-color: hsl(237, 53%, 38%);
            }
          }
          :global(.standard) {
            background-color: hsl(250, 53%, 27%);
            &:hover {
              background-color: hsl(250, 53%, 38%);
            }
          }
          :global(.purple) {
            background-color: hsl(271, 53%, 32%);
            &:hover {
              background-color: hsl(271, 53%, 38%);
            }
          }
          :global(.turquoise) {
            background-color: hsl(204, 53%, 30%);
            &:hover {
              background-color: hsl(204, 53%, 38%);
            }
          }
          :global(.doclist-link) {
            color: white;
            text-decoration: none;
            padding: 20px 20px 40px;
            display: block;
          }
        }

        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default Bodytext;
