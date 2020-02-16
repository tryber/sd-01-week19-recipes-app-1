const linkMeatAPI = 'https://www.themealdb.com/api/json/v1/1/';
const linkDrinkAPI = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const mealAPI = (value = '', action, param) =>
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) =>
      param ? action({ meals: data.meals.slice(0, 12) }) : action(data),
    );

export const drinkAPI = (value = '', action, param) =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) =>
      param ? action({ drinks: data.drinks.slice(0, 12) }) : action(data),
    );

export const mealLocalStorageAPI = (value = '') =>
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('foodData', JSON.stringify(data)));

export const drinkLocalStorageAPI = (value = '') =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('foodData', JSON.stringify(data)));
