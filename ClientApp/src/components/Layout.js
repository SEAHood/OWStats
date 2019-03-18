import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div class="content">
        <NavMenu />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
