import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ROOT, OPEN, SURFACE, BACKDROP, SCROLL_LOCK } from './constants';

class Dialog extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    open: PropTypes.bool,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) document.body.classList.add(SCROLL_LOCK);
    else document.body.classList.remove(SCROLL_LOCK);
  }

  render() {
    const { className, children, open, ...otherProps } = this.props;

    return (
      <div
        className={classnames(ROOT, {
          [OPEN]: open,
        }, className)}
        {...otherProps}
      >
        <div className={SURFACE}>
          {children}
        </div>
        <div className={BACKDROP} />
      </div>
    );
  }
}

export default Dialog;
