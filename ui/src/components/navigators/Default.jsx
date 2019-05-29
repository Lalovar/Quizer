import React from 'react';
// Navigation dependencies
import { NavLink} from "react-router-dom";
// Constants
import {DEFAULT_MENU_ITEMS} from '../../constants/MenuItems'

class Default extends React.Component {

  printDefault = () => {
    
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            DEFAULT_MENU_ITEMS.map((menuItem, index) => (
              <li>
                <NavLink exact to={menuItem.url} id="navItem" key={menuItem.index}>
                  {menuItem.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default (Default);