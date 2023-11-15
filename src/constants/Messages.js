const request = Object.freeze({
  inputOrder:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  inputDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
});

const output = Object.freeze({
  intro: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  eventPreview: ['12월 ', '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!'],
  orderHistoryTitle: '\n<주문 메뉴>',
  totalPriceTitle: '\n<할인 전 총주문 금액>',
  giveawayTitle: '\n<증정 메뉴>',
  giveawayMessage: '샴페인 1개',
  benefitDetailsTitle: '\n<혜택 내역>',
  benefitPriceTitle: '\n<혜택 금액>',
  paymentPriceDiscountTitle: '\n<할인 후 예상 결제 금액>',
  eventBadgeTitle: '\n<12월 이벤트 배지>',
  noBenefitsMessage: '없음',
});

const MESSAGES = Object.freeze({
  request,
  output,
});

export default MESSAGES;
