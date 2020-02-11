const linkMeatAPI = 'https://www.themealdb.com/api/json/v1/1/';
const linkDrinkAPI = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const mealAPI = (value = '', action) => 
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) => action(data));

export const drinkAPI = (value = '', action) =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) => action(data));
