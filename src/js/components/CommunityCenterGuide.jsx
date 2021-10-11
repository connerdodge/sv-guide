import React, { useState } from 'react';
import styled from 'styled-components';

import SeasonSelector from './SeasonSelector';
import CommunityCenterChecklist from './CommunityCenterChecklist';

const saveData = JSON.parse(localStorage.getItem('sv-guide-state')) || {};

function CommunityCenterGuide() {
  const [season, setSeason] = useState(saveData.season);
  const [showSeasonSelector, setShowSeasonSelector] = useState(
    saveData.showSeasonSelector
  );

  function handleSeasonSelect(option) {
    setSeason(option);
    setShowSeasonSelector(false);
    localStorage.setItem(
      'sv-guide-state',
      JSON.stringify({ season: option, showSeasonSelector: false })
    );
  }

  let guideContent = null;
  if (season === undefined || showSeasonSelector) {
    guideContent = (
      <SeasonSelector handleSeasonSelect={handleSeasonSelect}></SeasonSelector>
    );
  } else {
    guideContent = <CommunityCenterChecklist season={season} />;
  }

  return (
    <Container>
      <StyledHeader>
        <StyledHeading>Stardew Valley Community Center Guide</StyledHeading>
        <StyledButton onClick={() => setShowSeasonSelector(true)}>
          Change Season
        </StyledButton>
      </StyledHeader>
      {guideContent}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: white;
`;

const StyledHeading = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: white;
  height: 40px;
  width: 150px;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 5px;

  float: right;
  position: absolute;
  top: 30px;
  right: 25px;

  &:hover {
    background-color: rgb(184, 255, 208);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default CommunityCenterGuide;
