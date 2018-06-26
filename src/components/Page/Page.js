import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title, type }
    },
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default Page;
