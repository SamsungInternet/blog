import React from "react";
import PropTypes from "prop-types";
require("core-js/fn/array/from");

import FaHome from "react-icons/lib/fa/home";
import FaTag from "react-icons/lib/fa/tag";

import Item from "./Item";
import Expand from "./Expand";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.itemList = React.createRef();

    const pages = props.pages.map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }));

    this.items = [
      { to: "/category/", label: "Categories", icon: FaTag },
      ...pages,
      { to: "https://medium.com/samsung-internet-dev", label: "Blog", icon: FaTag },
      { to: "https://github.com/SamsungInternet/support/issues", label: "Support", icon: FaTag },
      { to: "https://github.com/SamsungInternet", label: "Demos", icon: FaTag }
    ];

    this.renderedItems = []; // will contain references to rendered DOM elements of menu
  }

  state = {
    open: false,
    hiddenItems: []
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    fixed: PropTypes.bool.isRequired,
    screenWidth: PropTypes.number.isRequired,
    fontLoaded: PropTypes.bool.isRequired,
    pages: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.renderedItems = this.getRenderedItems();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.path !== prevProps.path ||
      this.props.fixed !== prevProps.fixed ||
      this.props.screenWidth !== prevProps.screenWidth ||
      this.props.fontLoaded !== prevProps.fontLoaded
    ) {
      if (this.props.path !== prevProps.path) {
        this.closeMenu();
      }
      this.hideOverflowedMenuItems();
    }
  }

  getRenderedItems = () => {
    const itemList = this.itemList.current;
    return Array.from(itemList.children);
  };

  hideOverflowedMenuItems = () => {
    const PADDING_AND_SPACE_FOR_MORELINK = this.props.screenWidth >= 1024 ? 60 : 0;

    const itemsContainer = this.itemList.current;
    const maxWidth = itemsContainer.offsetWidth - PADDING_AND_SPACE_FOR_MORELINK;

    this.setState({ hiddenItems: [] }); // clears previous state

    const menu = this.renderedItems.reduce(
      (result, item) => {
        item.classList.add("item");
        item.classList.remove("hideItem");

        const currentCumulativeWidth = result.cumulativeWidth + item.offsetWidth;
        result.cumulativeWidth = currentCumulativeWidth;

        if (!item.classList.contains("more") && currentCumulativeWidth > maxWidth) {
          const link = item.querySelector("a");

          item.classList.add("hideItem");
          item.classList.remove("item");
          result.hiddenItems.push({
            to: link.getAttribute("data-slug"),
            label: link.text
          });
        }
        return result;
      },
      { visibleItems: [], cumulativeWidth: 0, hiddenItems: [] }
    );

    this.setState(prevState => ({ hiddenItems: menu.hiddenItems }));
  };

  toggleMenu = e => {
    e.preventDefault();

    if (this.props.screenWidth < 1024) {
      this.renderedItems.map(item => {
        const oldClass = this.state.open ? "showItem" : "hideItem";
        const newClass = this.state.open ? "hideItem" : "showItem";

        if (item.classList.contains(oldClass)) {
          item.classList.add(newClass);
          item.classList.remove(oldClass);
        }
      });
    }

    this.setState(prevState => ({ open: !prevState.open }));
  };

  closeMenu = e => {
    //e.preventDefault();

    if (this.state.open) {
      this.setState({ open: false });
      if (this.props.screenWidth < 1024) {
        this.renderedItems.map(item => {
          if (item.classList.contains("showItem")) {
            item.classList.add("hideItem");
            item.classList.remove("item");
          }
        });
      }
    }
  };

  render() {
    const { screenWidth, theme } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <nav className={`menu ${open ? "open" : ""}`} rel="js-menu">
          <ul className="itemList" ref={this.itemList}>
            {this.items.map(item => (
              <Item item={item} key={item.label} theme={theme} external={false} />
            ))}
          </ul>
          {this.state.hiddenItems.length > 0 && <Expand onClick={this.toggleMenu} theme={theme} />}
          {open &&
            screenWidth >= 1024 && (
              <ul className="hiddenItemList">
                {this.state.hiddenItems.map(item => (
                  <Item item={item} key={item.label} hiddenItem theme={theme} />
                ))}
              </ul>
            )}
        </nav>

        {/* --- STYLES --- */}
        <style jsx>{`
          .menu {
            bottom: 0;
            flex-grow: 1;
            left: 0;
            max-height: ${open ? "1000px" : "50px"};
            position: fixed;
            width: 100%;
            z-index: 1;
            transition: all ${theme.time.duration.default};
           
          }

          @media (max-width: 1024px) {
            .menu {
              background-color: #fafafa;
              border-top: 1px solid #ccc;
              color: #ccc;
            }
          }

          .itemList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0; /* 0 ${theme.space.s}; */
            position: relative;
            width: 100%;
          }

          @below desktop {
            .menu {
              padding: 10px;
              &::after {
                position: absolute;
                content: "";
                left: ${theme.space.m};
                right: ${theme.space.m};
                top: 0;
                height: 1px;
              }

              &.open {
                max-height: 300px;
              }

              :global(.homepage):not(.fixed) & {
                bottom: -100px;
              }
            }
          }

          @from-width desktop {
            .menu {
              border-top: none;
              display: flex;
              position: relative;
              justify-content: center;
              transition: none;
            }

            .itemList {
              padding: 0;
              justify-content: flex-end;
            }

            .hiddenItemList {
              list-style: none;
              margin: 0;
              position: absolute;
              background: ${theme.background.color.primary};
              border: 1px solid ${theme.line.color};
              top: 40px;
              right: 0;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              z-index: 3;

              &:after {
                content: "";
                background: ${theme.background.color.primary};
                z-index: 10;
                top: -10px;
                right: -1px;
                width: 44px;
                height: 10px;
                position: absolute;
                border-left: 1px solid ${theme.line.color};
                border-right: 1px solid ${theme.line.color};
              }


              :global(.fixed) & {
                top: 44px;
              }
            }
            a {
              text-shadow: 0;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Menu;
