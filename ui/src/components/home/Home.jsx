import React from 'react';
// Navigation dependencies
import { NavLink} from "react-router-dom";
// MenuItems
import Default from './../navigators/Default'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
            <Default />
      </div>
    );
  }
}

export default (Home);