import React from 'react';
import styled from 'styled-components';

import { getGroups } from '../service/getSeasonChecklistItems';
import ListItem from './ListItem';

function CommunityCenterChecklist() {
  // Temporary until data is formatted/cleaned
  const items = getGroups()[0]['bundles'][0]['items'];
  return (
    <Container>
      {items.map((item, idx) => (
        <ListItem key={idx} item={item}></ListItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
`;

export default CommunityCenterChecklist;
