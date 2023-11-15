import CONSTANTS from './Constants.js';

const mushroomSoup = Object.freeze({
  name: '양송이수프',
  category: CONSTANTS.categories.appetizer,
  price: 6_000,
});

const tapas = Object.freeze({
  name: '타파스',
  category: CONSTANTS.categories.appetizer,
  price: 5_500,
});

const caesarSalad = Object.freeze({
  name: '시저샐러드',
  category: CONSTANTS.categories.appetizer,
  price: 8_000,
});

const tboneSteak = Object.freeze({
  name: '티본스테이크',
  category: CONSTANTS.categories.mainMenu,
  price: 55_000,
});

const barbecuedRib = Object.freeze({
  name: '바비큐립',
  category: CONSTANTS.categories.mainMenu,
  price: 54_000,
});

const seafoodPasta = Object.freeze({
  name: '해산물파스타',
  category: CONSTANTS.categories.mainMenu,
  price: 35_000,
});

const christmasPasta = Object.freeze({
  name: '크리스마스파스타',
  category: CONSTANTS.categories.mainMenu,
  price: 25_000,
});

const chocoCake = Object.freeze({
  name: '초코케이크',
  category: CONSTANTS.categories.dessert,
  price: 15_000,
});

const icecream = Object.freeze({
  name: '아이스크림',
  category: CONSTANTS.categories.dessert,
  price: 5_000,
});

const zeroCola = Object.freeze({
  name: '제로콜라',
  category: CONSTANTS.categories.beverage,
  price: 3_000,
});

const redWine = Object.freeze({
  name: '레드와인',
  category: CONSTANTS.categories.beverage,
  price: 60_000,
});

const champagne = Object.freeze({
  name: '샴페인',
  category: CONSTANTS.categories.beverage,
  price: 25_000,
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
