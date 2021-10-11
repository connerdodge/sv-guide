import React from 'react';
import styled from 'styled-components';

import { getGroups } from '../service/getBundleGroups';
import Bundle from './Bundle';

function CommunityCenterChecklist({ season }) {
  // Temporarily filter on groups that have bundles. Data incomplete.
  return getGroups().filter(group => group.bundles).map(({ name, reward, bundles }) => (
      <Container>
          <StyledGroupTitle>{name}</StyledGroupTitle>
          <StyledReward>Reward: {reward}</StyledReward>
          {bundles.map(bundle => {
            const {name, icon, reward, items } = bundle;
            return <Bundle key={name} season={season} name={name} icon={icon} reward={reward} items={items} />;
          })}
      </Container>
  ));
}

const Container = styled.div`  
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
`;

const StyledGroupTitle = styled.h2`
  font-weight: bold;
`;

const StyledReward = styled.h4`
  padding-right: 10px;
`;

export default CommunityCenterChecklist;
