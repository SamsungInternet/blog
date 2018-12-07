import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import Bg from "../../images/png/hero-background.png";
import avatar from "../../images/png/silogo.svg";

class Header extends React.Component {
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`} >
          <Link to="/" className="logo-link">
            <img className="logo-img" src={avatar} alt={config.siteTitle} />
          </Link>
            <h1>Developer Hub</h1>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                  path={path}
                  fixed={fixed}
                  screenWidth={width}
                  fontLoaded={loaded}
                  pages={pages}
                  theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            z-index: 2;
            align-items: center;
            justify-content: center;
            display: flex;
            height: ${theme.header.height.default};
            position: relative;
            top: 0;
            padding: 0 1em;
            width: 100%;
            align-items: center;
            background-image: url(${Bg});

            &.homepage {
              position: absolute;
              height: ${theme.header.height.homepage};
            }
          }

          h1 {
            width: max-content;
            text-align: right;
            font-size: 6vw;
            margin: 0 30px;
            flex-shrink: 0;
            font-family: SamsungSharpSans-Regular;
            color: white;
            letter-spacing: 0;
            text-shadow:
            -1px -1px 2px  ${theme.hero.backgroundColor}, 
            1px -1px 2px ${theme.hero.backgroundColor},
            -1px 1px 2px  ${theme.hero.backgroundColor},
            1px 1px 2px  ${theme.hero.backgroundColor};
          }

          .logo-img {
            margin: ${theme.space.inline.default};
            overflow: hidden;
            transition: all 0.5s;
            height: 3em;
          }

          :global(.logo-link) {
            display: block;
            width: 50px;
            overflow: hidden;
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
          }

          @from-width tablet {
            .header {
              padding: ${theme.space.inset.l};

              &.homepage {
                height: 100px;
              }
            }
            h1 {
              font-size: 32px;
            }
            :global(.logo-link) {
              width: auto;
            }
          }

          @below desktop {
            .header.homepage {
              .logo {
                border: none;
              }

              :global(a.logo-link),
             
              h1 {
                color: ${theme.color.neutral.white};
              }
            }
          }

          @from-width desktop {
            .header {
              align-items: center;
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 0.5s;

              &.fixed {
                height: ${theme.header.height.fixed};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 3;
                background-image: url(${Bg});

                h1 {
                  display: none;
                }
              }

              &.homepage:not(.fixed) {
                :global(a.logo-link),

                h1 {
                  color: ${theme.color.neutral.gray.d};
                }
                
              }
            }

            .header :global(a.logo-link) {
              text-align: left;
              flex-shrink: 0;
            }

            .logo-img {
              margin: ${theme.space.inline.default};

              .fixed & {
                height: 36px;
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            h1 {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }

            @keyframes h2Entry {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
