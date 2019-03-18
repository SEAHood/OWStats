import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
        <div>
            <div class="profile-title-panel-container">
                <div class="panel">
                    <h1>seahood#2314</h1>
                </div>
            </div>
            <div class="profile-stats-panel-container">
                <div class="panel panel-something">
                    <h1>seahood#2314</h1>
                </div>
                <div class="panel panel-something-else">
                    <h1>seahood#2314</h1>
                </div>
            </div>
        </div>
    );
  }
}
