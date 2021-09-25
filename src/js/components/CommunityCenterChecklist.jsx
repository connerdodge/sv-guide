import React, { Fragment } from 'react';
import getSeasonChecklistItems from '../service/getSeasonChecklistItems';
import ListItem from './ListItem';

function CommunityCenterChecklist({ season }) {
  return (
    <Fragment>
      {getSeasonChecklistItems(season).map((item, idx) => (
        <ListItem key={idx} item={item}></ListItem>
      ))}
    </Fragment>
  );
}

export default CommunityCenterChecklist;
