import React, { Component } from 'react';
import SeasonSelector from './season_selector';
import '../styles/community_center_guide.css';

class CommunityCenterGuide extends Component {
  constructor (props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('sv-guide-state')) || {};
  }

  handleSeasonSelect = (option) => {
    const newState = {...this.state, ...{season: option}, ...{showSeasonSelector: false}};
    this.setState(newState);
    localStorage.setItem('sv-guide-state', JSON.stringify(newState));
  };

  showSeasonSelector = () => {
    const newState = {...this.state, ...{showSeasonSelector: true}};
    this.setState(newState);
  };

  render() {
    let seasonSelector = null;
    if (this.state.season === undefined || this.state.showSeasonSelector) {
      seasonSelector = <SeasonSelector handleSeasonSelect={this.handleSeasonSelect.bind(this)}></SeasonSelector>;
    }

    return (
      <div className="community-center">
        <header className="cc-header">
          <h1 className="cc-title">Stardew Valley Community Center Guide</h1>
          <button className={'btn change-season-btn'} onClick={() => this.showSeasonSelector()}>Change Season</button>
        </header>

        {seasonSelector}
      
      </div>
    );
  }
}

export default CommunityCenterGuide;
