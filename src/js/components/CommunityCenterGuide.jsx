import React, { useState } from 'react';
import SeasonSelector from './SeasonSelector';
import '../../styles/community_center_guide.css';
import CommunityCenterChecklist from './CommunityCenterChecklist';

const saveData = JSON.parse(localStorage.getItem('sv-guide-state')) || {};

function CommunityCenterGuide() {
  const [season, setSeason] = useState(saveData.season);
  const [showSeasonSelector, setShowSeasonSelector] = useState(saveData.showSeasonSelector);

  function handleSeasonSelect(option) {
    setSeason(option);
    setShowSeasonSelector(false);
    localStorage.setItem('sv-guide-state', JSON.stringify({season: option, showSeasonSelector: false}));
  }

  let guideContent = null;
  if (season === undefined || showSeasonSelector) {
    guideContent = <SeasonSelector handleSeasonSelect={handleSeasonSelect}></SeasonSelector>;
  }
  else {
    guideContent = <CommunityCenterChecklist season={season} />;
  }

  return (
    <div className="community-center">
      <header className="cc-header">
        <h1 className="cc-title">Stardew Valley Community Center Guide</h1>
        <button className={'btn change-season-btn'} onClick={() => setShowSeasonSelector(true)}>Change Season</button>
      </header>
      {guideContent}
    </div>
  );
}

export default CommunityCenterGuide;
