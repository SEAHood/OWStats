import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header>
            <div class="navbar">
                <div class="navbar-logo"><img height="50" src="owlogo.png" /></div>
                <div class="navbar-menu">Something | SOME THING | ETC</div>
            </div>
        </header>
    );
  }
}
