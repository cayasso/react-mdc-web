import React, { PropTypes } from 'react';
import ListItem from '../List/ListItem';

const propTypes = {
  children: PropTypes.node,
};

const MenuItem = ({ children, ...otherProps }) => (
  <ListItem
    role="menuitem"
    {...otherProps}
  >
    {children}
  </ListItem>
);
MenuItem.propTypes = propTypes;
export default MenuItem;
