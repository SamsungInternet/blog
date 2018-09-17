import "../../static/typeface-samsungone";
import FontFaceObserver from "fontfaceobserver";
import PropTypes from "prop-types";
import React from "react";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Header from "../components/Header";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/theme.yaml";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    if (typeof window !== `undefined`) {
      this.loadFont("font300", "SamsungSharpSans-Regular", 300);
      this.loadFont("font600", "SamsungSharpSans-Bold", 600);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    const { children, data } = this.props;
    const {
      pages: { edges: pages }
    } = data;

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <FontLoadedContext.Provider value={this.state.font400loaded}>
          <ScreenWidthContext.Provider value={this.state.screenWidth}>
            <React.Fragment>
              <Header path={this.props.location.pathname} pages={pages} theme={this.state.theme} />
              <main>{children()}</main>

              {/* --- STYLES --- */}
              <style jsx>{`
                main {
                  min-height: 80vh;
                }
              `}</style>
              <style jsx global>{`
                html {
                  box-sizing: border-box;
                }
                *,
                *:after,
                *:before {
                  box-sizing: inherit;
                  margin: 0;
                  padding: 0;
                }
                body {
                  font-family: ${this.state.font300loaded
                    ? "'SamsungSharpSans-Regular', sans-serif;"
                    : "Arial, sans-serif;"};
                }
                h1,
                h2,
                h3 {
                  font-family: ${this.state.font600loaded
                    ? "'SamsungSharpSans-Bold', sans-serif;"
                    : "Arial, sans-serif;"};
                  line-height: 1.4;
                  letter-spacing: 0.05em;
                  margin: 0;
                }
                h4 {
                  font-family: ${this.state.font600loaded
                    ? "'SamsungSharpSans-Bold', sans-serif;"
                    : "Arial, sans-serif;"};
                    letter-spacing: 0.04em;
                }
                h1 {
                }
                p {
                  margin: 0;
                  line-height: 1.4;
                }
                strong {
                  font-family: ${this.state.font600loaded
                    ? "'SamsungSharpSans-Bold', sans-serif;"
                    : "Arial, sans-serif;"};
                }
                a {
                  text-decoration: none;
                  color: #666;
                }
                main {
                  width: auto;
                  display: block;
                }
                
                .about-logo {
                  display: block;
                  max-width: 50%;
                  margin: 0 auto;
                }
                .about-description {
                  padding:1em;
                }
                .versions {
                  margin-top: 1em;
                }
                .version {
                  position: relative;
                }
                h4 {
                  margin-bottom: 1em;
                  font-size: 1.4em;
                }
                .side-column {
                  padding: 1em;
                  background-color: #F2F2F2;
                }
                .small-logo {
                  position: absolute;
                  right: 50%;
                  transform: translate(50%, -130%);
                  width: 80px;
                }
                .ul_card {
                  list-style: none;
                  margin: 0 0 1em;
                  border: 1px solid #F2F2F2;
                  padding: .6em;
                  line-height:1.6em;
                }
                .disclaimer {
                  font-size: 0.7em;
                }
                .play-button {
                  
                  max-width: 300px;
                  display: block;
                  margin: 0 auto;
                }

                #oculus-button {
                  display: block;
                  width: 100%;
                  padding: 8%;
                }

                @media (min-width: 650px) {
                  .about-intro {
                    display: flex;
                    justify-content: space-between;
                  }
                  .versions {
                    display:flex;
                    justify-content: space-between;
                  }
                  .version {
                    width: calc(50% - 20px);
                  }
                  .si-more{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                  }
                  .side-column {
                    width: calc(50% - 40px);
                    margin-left: 40px;
                    flex-shrink: 0;
                  }
                }
              `}</style>
              <img src="https://samsung-internet-dev-hub-analytics.glitch.me/counter.png?fallback=https://samsunginter.net" alt="" width="1" height="1" aria-hidden="true"></img>
            </React.Fragment>
          </ScreenWidthContext.Provider>
        </FontLoadedContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`;
