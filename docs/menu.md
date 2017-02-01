```jsx
    <div className="mdc-menu-anchor">
        <button
          id="menu"
          onClick={this.handleMenu}
        >test</button>
        <Menu 
          target="menu"
          onSelect={this.handleMenuSelect}
        >
          <MenuItem onSelect={this.handleMenuSelect}>test 1</MenuItem>
          <MenuItem>test 2</MenuItem>
          <MenuItem>test 3</MenuItem>
          <MenuItem>test 4</MenuItem>
        </Menu>
      </div>
```
