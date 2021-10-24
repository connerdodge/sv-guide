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
        <StyledLink href="https://stardewvalleywiki.com/Bundles">Bundles Official Wiki</StyledLink>
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
  display: flex;
  justify-content: space-between;
  line-height: 50px;
`;

const StyledHeading = styled.h1`
  font-size: 1.5em;
  margin: 0;
  text-align: center;
`;

const StyledLink = styled.a`
  font-size: 18px;
  color: white;
`;

const StyledButton = styled.button`
  background-color: white;
  height: 40px;
  width: 150px;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 6px;

  &:hover {
    background-color: rgb(184, 255, 208);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default CommunityCenterGuide;
