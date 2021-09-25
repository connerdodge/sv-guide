import items from '../bundle_list.json';

const getSeasonChecklistItems = (season) => {
  switch (season) {
    case 'spring':
      return getSpringChecklistItems();
    case 'summer':
      return getSummerChecklistItems();
    case 'fall':
      return getFallChecklistItems();
    case 'winter':
      return getWinterChecklistItems();
    default:
      break;
  }
};

const getSpringChecklistItems = () => {
  return items['spring'].concat(items['any']);
};

const getSummerChecklistItems = () => {
  return items['summer'].concat(items['any']);
};

const getFallChecklistItems = () => {
  return items['fall'].concat(items['any']);
};

const getWinterChecklistItems = () => {
  return items['winter'].concat(items['any']);
};

export default getSeasonChecklistItems;
