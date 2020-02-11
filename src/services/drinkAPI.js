const linkCocktailAPI = 'https://thecocktaildb.com/api/json/v1/1/';
const cocktailAPI = (value) => (
  fetch(`${linkCocktailAPI}${value}`)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default cocktailAPI;
