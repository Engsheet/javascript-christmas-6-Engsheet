const category = Object.freeze({
  appetizer: '에피타이저',
  mainMenu: '메인',
  dessert: '디저트',
  beverage: '음료',
});

const dDayDiscount = Object.freeze({
  discountPrice: 1000,
  additional: 100,
});

const weekdayDiscount = Object.freeze({
  discountPrice: 2023,
  condition: 'weekday',
});

const weekendDiscount = Object.freeze({
  discountPrice: 2023,
  condition: 'weekend',
});

const specialDayDiscount = Object.freeze({
  discountPrice: 1000,
  specialDay: [3, 10, 17, 24, 25, 31],
});

const event = Object.freeze({
  defaultValue: 0,
  minParticipatePrice: 10_000,
  giveawayEventPrice: 120_000,
  dDayDiscount,
  weekdayDiscount,
  weekendDiscount,
  specialDayDiscount,
});

const star = Object.freeze({
  name: '별',
  priceCondition: 5000,
});

const tree = Object.freeze({
  name: '트리',
  priceCondition: 10000,
});

const santa = Object.freeze({
  name: '산타',
  priceCondition: 20000,
});

const Badge = Object.freeze({
  star,
  tree,
  santa,
});

const CONSTANTS = Object.freeze({
  category,
  event,
  Badge,
  maxOrderQuantity: 20,
});

export default CONSTANTS;
