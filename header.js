import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="/">
            <img src="./images/logo.png" width="100" alt="logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
