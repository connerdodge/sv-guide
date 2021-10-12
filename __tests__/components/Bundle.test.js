import React from 'react';
import { render } from '@testing-library/react';

import Bundle from '../../src/js/components/Bundle';

const defaultProps = {
  season: 'spring',
  name: 'Spring Foraging',
  icon: 'https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png',
  reward: 'Spring Seeds (30)',
  items: [
    {
      season: 'spring',
      itemName: 'Wild Horseradish',
      icon: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/90/Wild_Horseradish.png/24px-Wild_Horseradish.png',
      location: [],
      time: '',
      weather: ''
    },
  ],
};

it('renders and matches snapshot', () => {
  const { container } = render(<Bundle {...defaultProps} />);
  expect(container).toMatchSnapshot();
});
