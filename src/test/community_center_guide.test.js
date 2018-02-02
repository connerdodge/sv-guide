import React from 'react';
import ReactDOM from 'react-dom';
import CommunityCenterGuide from '../js/community_center_guide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityCenterGuide />, div);
  ReactDOM.unmountComponentAtNode(div);
});
