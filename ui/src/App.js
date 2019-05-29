/**
 * Filename: App.js
 * Usage: Route to components
 * Description: Route the components to the specified path value
 */
import React from 'react';
// React-router dependencies
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
// Components paths
import About from './components/about/About';
import Admin from './components/admin/Admin';
import Contact from './components/contact/Contact';
import Eshop from './components/eshop/Eshop';
import Home from './components/home/Home';
import Login from './components/login/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/eshop" component={Eshop}/>
        <Route exact path="/login" component={Login}/>
      </Router>
      );
    }
  }
  

export default App;
