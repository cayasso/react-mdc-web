import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import List from '../List/List';

class Menu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
    open: PropTypes.bool,
    onSelect: PropTypes.func,
    target: PropTypes.string,
  }

  static ROOT = 'mdc-simple-menu';
  static OPEN = `${Menu.ROOT}--open`;

  constructor(props) {
    super(props);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const toggle = document.getElementById(this.props.target);
    if (toggle) {
      toggle.addEventListener('click', this.handleMenuToggle);
    }
  }

  handleDocumentClick() {
    this.setState({ open: false });
  }

  handleMenuToggle(event) {
    event.stopPropagation();
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.setState({ open: true });
    document.addEventListener('click', this.handleDocumentClick);
  }

  close() {
    this.setState({ open: false });
    document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const {
      children,
      className,
      onSelect,
      ...otherProps
    } = this.props;

    const { open } = this.state;

    const menuItems = children && children.map((menuItem, index) => 
      React.cloneElement(menuItem, {
        key: index,
        onClick: () => {
          onSelect(index);
        },
      }));
    return (
      <div
        className={classnames(Menu.ROOT, {
          [Menu.OPEN]: open,
        }, className)}
        {...otherProps}
      >
        <List
          className="mdc-simple-menu__items"
          role="menu"
        >
          {menuItems}
        </List>
      </div>
    );
  }
}
export default Menu;
