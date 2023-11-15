import CONSTANTS from '../constants/Constants.js';

export const getDay = date => {
  const week = [...CONSTANTS.weekday, ...CONSTANTS.weekend];
  const day = new Date(`${CONSTANTS.eventMonth}-${date}`).getDay();

  return week[day];
};
