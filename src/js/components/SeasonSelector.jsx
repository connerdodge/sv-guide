import React from 'react';
import styled from 'styled-components';

import springSrc from '../../img/spring-season.png';
import summerSrc from '../../img/summer-season.png';
import fallSrc from '../../img/fall-season.png';
import winterSrc from '../../img/winter-season.png';

function SeasonSelector({ handleSeasonSelect }) {
  return (
    <Container>
      <StyledTitle>Select Your Current Season</StyledTitle>
      {Object.keys(seasons).map(key => (
          <StyledSeasonCard
            onClick={() => handleSeasonSelect(key)}
            key={key}
          >
            <StyledSeasonImg src={seasons[key].imgSrc} alt={seasons[key].text} />
            <StyledSeasonTitle>{seasons[key].text}</StyledSeasonTitle>
          </StyledSeasonCard>
      ))}
    </Container>
  );
}

const seasons = {
  'spring': {
    text: 'Spring',
    imgSrc: springSrc,
  },
  'summer': {
    text: 'Summer',
    imgSrc: summerSrc,
  },
  'fall': {
    text: 'Fall',
    imgSrc: fallSrc,
  },
  'winter': {
    text: 'Winter',
    imgSrc: winterSrc,
  },
};

const Container = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 80%;
  height: 400px;
  background-color: rgba(241, 241, 241, 0.63);
  border-radius: 10px;

  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
`;

const StyledTitle = styled.h1`
  font-weight: normal;
  font-family: 'Stardew';
  font-size: 3em;
  padding-top: 15px;
`;

const StyledSeasonCard = styled.div`
  width: 160px;
  height: 200px;
  display: inline-block;
  background-color: rgba(224, 224, 224, 0.541);
  margin: 0 15px 0 15px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(184, 255, 208);
  }
`;

const StyledSeasonImg = styled.img`
  height: 64px;
  width: auto;
  margin: 25px auto;
  border-radius: 2px;
`;

const StyledSeasonTitle = styled.h3`
  font-family: 'Stardew';
  font-size: 2em;
  margin-top: 5px;
`;

export default SeasonSelector;
