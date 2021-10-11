import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

function Bundle({ name, icon, reward, items, season }) {
  const filteredItems = items
    .filter(item => [season, 'any'].includes(item.season))
    .map(item => (<ListItem key={item.itemName} item={item}></ListItem>));

  if (!filteredItems.length) return null;

  return (
    <Container>
      <StyledName>{name}</StyledName>
      <StyledInfo>Reward: {reward}</StyledInfo>
      <StyledItemContainer>{filteredItems}</StyledItemContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 34px;
  color: #444;
`;

const StyledName = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

const StyledInfo = styled.span`
  padding-right: 10px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
`;

export default Bundle;
