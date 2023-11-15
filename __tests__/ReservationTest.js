import Reservation from '../src/Domain/Reservation';

describe('에약 서비스 테스트', () => {
  let reservation;

  beforeEach(() => {
    reservation = new Reservation();
  });

  describe('날짜 입력 예외 테스트', () => {
    const cases = ['0', '32', '100', '-10', '십'];

    test.each(cases)(
      '날짜 입력 형식이 잘못된 경우 예외처리 해야 한다.',

      input => {
        // when
        const setDate = () => reservation.setDate(input);

        // then
        expect(setDate).toThrow('[ERROR]');
      },
    );
  });

  describe('메뉴 입력 예외 테스트', () => {
    const cases = [
      {
        input: '초코케이크1,샴페인2,양송이수프3',
        describe: '입력 형식이 맞아야 한다.',
      },
      {
        input: '초코케이크랑 제로콜라 1개씩',
        describe: '입력 형식이 맞아야 한다.',
      },
      {
        input: '초코케이크-1,샴페인-1,초코케이크-2',
        describe: '메뉴는 중복하여 입력할 수 없다.',
      },
      {
        input: '초코-1,나초-2',
        describe: '메뉴에 없는 항목은 주문할 수 없다. (전부 불일치)',
      },
      {
        input: '초코케이크-1,코카콜라-2',
        describe: '메뉴에 없는 항목은 주문할 수 없다. (일부만 불일치)',
      },
      {
        input: '제로콜라-2,샴페인-1',
        describe: '음료만 주문할 수 없다',
      },
      {
        input: '초코케이크-1,해산물파스타-0,제로콜라-2',
        describe: '주문 개수 0개를 입력할 수 없다.',
      },
      {
        input: '초코케이크-10,해산물파스타-10,샴페인-10',
        describe: '주문 합계가 20개를 초과할 수 없다.',
      },
    ];

    test.each(cases)(
      '주문 입력 형식이 잘못된 경우 예외처리 해야 한다.',

      ({ input }) => {
        // when
        const formatValue = input.split(',');
        const setOrder = () => reservation.setOrder(formatValue);

        // then
        expect(setOrder).toThrow('[ERROR]');
      },
    );
  });

  // describe('메뉴 입력 예외 테스트', () => {
  //   const cases = [
  //     {
  //       input: ['바비큐립-1', '샴페인-2', '크리스마스파스타-2'],
  //       expected: ['바비큐립 1개', '샴페인 2개', '크리스마스파스타 3개'],
  //     },
  //     {
  //       input: ['시저샐러드-1', '티본스테이크-6', '제로콜라-6'],
  //       expected: ['시저샐러드 1개', '티본스테이크 6개', '제로콜라 6개'],
  //     },
  //     {
  //       input: ['초코케이크-1', '해산물파스타-3', '샴페인-3'],
  //       expected: ['초코케이크 1개', '해산물파스타 3개', '샴페인 3개'],
  //     },
  //   ];

  //   test.each(cases)(
  //     '주문 입력 형식이 잘못된 경우 예외처리 해야 한다.',

  //     ({ input, expected }) => {
  //       // when
  //       const result = () => {
  //         reservation.setOrder(input);
  //         reservation.getOrderHistory();
  //       };

  //       // then
  //       expect(result).toBe(expected);
  //     },
  //   );
  // });
});
