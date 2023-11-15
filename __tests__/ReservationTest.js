import Reservation from '../src/Domain/Reservation';
import CONSTANTS from '../src/constants/Constants';

describe('Reservation 클래스 테스트', () => {
  let reservation;

  beforeEach(() => {
    reservation = new Reservation();
  });

  describe('날짜 입력 예외 테스트', () => {
    // given
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
    // given
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

  describe('getOrderHistory 메서드 테스트', () => {
    test('"메뉴-n(개수)"의 형태에서 "메뉴 n개"의 형태로 포매팅한다.', () => {
      // given
      const input = ['바비큐립-1', '샴페인-2', '크리스마스파스타-2'];
      const expected = ['바비큐립 1개', '샴페인 2개', '크리스마스파스타 2개'];

      // when
      reservation.setOrder(input);

      // then
      expect(reservation.getOrderHistory()).toEqual(expected);
    });
  });

  describe('getTotalPrice 메서드 테스트', () => {
    test('입력한 메뉴의 가격 합계를 출력한다.', () => {
      // given
      const input = ['바비큐립-1', '샴페인-2', '크리스마스파스타-2'];
      const expected = 154000;

      // when
      reservation.setOrder(input);

      // then
      expect(reservation.getTotalPrice()).toEqual(expected);
    });
  });

  describe('getCategoryOrderCount 메서드 테스트', () => {
    test('원하는 카테고리 메뉴의 개수 합계를 출력한다.', () => {
      // given
      const input = ['바비큐립-1', '샴페인-2', '크리스마스파스타-2'];
      const expected = 3;

      // when
      reservation.setOrder(input);

      // then
      expect(
        reservation.getCategoryOrderCount(CONSTANTS.categories.mainMenu),
      ).toEqual(expected);
    });
  });
});
