const mushroomSoup = Object.freeze({
  name: '양송이수프',
  category: '에피타이저',
  price: 6000,
});

const tapas = Object.freeze({
  name: '타파스',
  category: '에피타이저',
  price: 5500,
});

const caesarSalad = Object.freeze({
  name: '시저샐러드',
  category: '에피타이저',
  price: 8000,
});

const tboneSteak = Object.freeze({
  name: '티본스테이크',
  category: '메인',
  price: 55000,
});

const barbecuedRib = Object.freeze({
  name: '바비큐립',
  category: '메인',
  price: 54000,
});

const seafoodPasta = Object.freeze({
  name: '해산물파스타',
  category: '메인',
  price: 35000,
});

const christmasPasta = Object.freeze({
  name: '크리스마스파스타',
  category: '메인',
  price: 25000,
});

const chocoCake = Object.freeze({
  name: '초코케이크',
  category: '디저트',
  price: 15000,
});

const icecream = Object.freeze({
  name: '아이스크림',
  category: '디저트',
  price: 5000,
});

const zeroCola = Object.freeze({
  name: '제로콜라',
  category: '음료',
  price: 3000,
});

const redWine = Object.freeze({
  name: '레드와인',
  category: '음료',
  price: 60000,
});

const champagne = Object.freeze({
  name: '샴페인',
  category: '음료',
  price: 25000,
});

const MENU = Object.freeze({
  양송이수프: mushroomSoup,
  타파스: tapas,
  시저샐러드: caesarSalad,
  티본스테이크: tboneSteak,
  바비큐립: barbecuedRib,
  해산물파스타: seafoodPasta,
  크리스마스파스타: christmasPasta,
  초코케이크: chocoCake,
  아이스크림: icecream,
  제로콜라: zeroCola,
  레드와인: redWine,
  샴페인: champagne,
});

export default MENU;
