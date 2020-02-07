const linkCocktailAPI = 'https://thecocktaildb.com/api/json/v1/1/'
const CocktailAPI = (value) => (
  fetch(`${linkCocktailAPI}${value}`)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default CocktailAPI;
