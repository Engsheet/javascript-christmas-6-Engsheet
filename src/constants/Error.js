const ERROR = Object.freeze({
  emptyInput: '입력 값이 없습니다. 값을 입력해주세요.\n',
  invalidDate: '유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.\n',

  passedInputDate: '예약하신 날짜는 이미 지난 날짜입니다.\n',

  invalidInputOrder: '입력 형식이 잘못되었습니다. 입력 형식을 확인해주세요.\n',
  duplicateOrder: '메뉴가 중복되었습니다.',
  invalidMenu: '메뉴판에 없는 항목을 입력하였습니다.',
  onlyBeverage: '음료만 주문할 수 없습니다.',
  zeroQuantity: '개수에 0개를 입력할수 없습니다.',
});

export default ERROR;
