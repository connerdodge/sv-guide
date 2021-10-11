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

const getGroups = () => {
  return items['groups'];
};

const getSpringChecklistItems = () => {
  return items['spring'];
};

const getSummerChecklistItems = () => {
  return items['summer'];
};

const getFallChecklistItems = () => {
  return items['fall'];
};

const getWinterChecklistItems = () => {
  return items['winter'];
};

export { getSeasonChecklistItems, getGroups };
