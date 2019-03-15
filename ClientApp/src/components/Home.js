import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello</h1>
        <p>Welcome to the awesome team page of the best team in the world, the team consists of:</p>
        <ul>
          <li><a href='https://get.asp.net/'>seahood</a></li>
          <li><a href='https://facebook.github.io/react/'>VitaminD</a></li>
          <li><a href='https://facebook.github.io/react/'>Townzingtown</a></li>
          <li><a href='https://facebook.github.io/react/'>PleaseStop</a></li>
          <li><a href='https://facebook.github.io/react/'>struan</a></li>
        </ul>
      </div>
    );
  }
}
