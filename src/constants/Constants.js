const categories = Object.freeze({
  appetizer: '에피타이저',
  mainMenu: '메인',
  dessert: '디저트',
  beverage: '음료',
});

const eventName = Object.freeze({
  dDayDiscount: '크리스마스 디데이 할인',
  weekdayDiscount: '평일 할인',
  weekendDiscount: '주말 할인',
  specialDiscount: '특별 할인',
  giveawayEvent: '증정 이벤트',
});

const eventValue = Object.freeze({
  default: 0,
  minParticipatePrice: 10_000,
  giveawayEventPrice: 120_000,
  giveawayBenefit: 25_000,
  weekDiscountPrice: 2_023,
  dDayDiscountPrice: 1_000,
  dDayDiscountAdditional: 100,
  specialDayDiscountPrice: 1_000,
  specialDay: [3, 10, 17, 24, 25, 31],
});

const Badge = Object.freeze({
  santaBadge: '산타',
  santaConditionPrice: 20_000,
  treeBadge: '트리',
  treeConditionPrice: 10_000,
  starBadge: '별',
  starConditionPrice: 5_000,
});

const CONSTANTS = Object.freeze({
  weekday: ['일', '월', '화', '수', '목'],
  weekend: ['금', '토'],
  eventMonth: '2023-12',
  maxOrderCount: 20,
  categories,
  eventName,
  eventValue,
  Badge,
});

export default CONSTANTS;
