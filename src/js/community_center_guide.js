import React, { Component } from 'react';
import SeasonSelector from './season_selector';
import '../styles/community_center_guide.css';
import CommunityCenterChecklist from './community_center_checklist';

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
    let guideContent = null;
    if (this.state.season === undefined || this.state.showSeasonSelector) {
      guideContent = <SeasonSelector handleSeasonSelect={this.handleSeasonSelect.bind(this)}></SeasonSelector>;
    }
    else {
      guideContent = <CommunityCenterChecklist season={this.state.season} />;
    }

    return (
      <div className="community-center">
        <header className="cc-header">
          <h1 className="cc-title">Stardew Valley Community Center Guide</h1>
          <button className={'btn change-season-btn'} onClick={() => this.showSeasonSelector()}>Change Season</button>
        </header>

        {guideContent}
      
      </div>
    );
  }
}

export default CommunityCenterGuide;
