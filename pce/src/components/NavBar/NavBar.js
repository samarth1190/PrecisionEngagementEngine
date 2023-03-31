import React from 'react';
import './NavBar.css';

class Navbar extends React.Component{
  render(){
    return(
      <div className="navbar">
        <div className="logo">
          Precision Clinical Engine
        </div>
        <div className="navbar-options">
          <div className="navbar-option">Campaigns</div>
          <div className="navbar-option">Add a Campaign</div>
          <div className="navbar-option">My Favorites</div>
          <div className="navbar-option">Dialer</div>
          <div className="navbar-option">SignIn/SignUp</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
