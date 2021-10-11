import React, { useState } from 'react';
import styled from 'styled-components';

function ListItem({ item: { itemName, bundle, location, time, weather } }) {
  const [checked, setChecked] = useState(false);

  return (
    <Container style={checked ? { color: '#888', textDecoration: 'line-through' } : null}>
      <StyledInput
        type="checkbox"
        onClick={() => setChecked(!checked)}
      />
      <StyledName>{itemName}</StyledName>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 34px;
  display: inline-flex;
  color: #444;
`;

const StyledInput = styled.input`
  margin-right: 15px;
  transform: scale(1.75);
`;

const StyledName = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

export default ListItem;
