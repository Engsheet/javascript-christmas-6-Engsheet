const ERROR = Object.freeze({
  emptyInput: '입력 값이 없습니다. 값을 입력해주세요.\n',
  invalidInputDate: '예약하실 날짜는 1~31 사이의 숫자로 입력해주세요.\n',
  passedInputDate: '예약하신 날짜는 이미 지난 날짜입니다.\n',
  invalidInputOrder: '입력 형식이 잘못되었습니다. 입력 형식을 확인해주세요.\n',
  duplicateOrder: '메뉴가 중복되었습니다. 다시 확인해주세요.',
  invalidMenu: '메뉴판에 없는 항목을 입력하였습니다. 다시 확인해주세요.',
});

export default ERROR;
