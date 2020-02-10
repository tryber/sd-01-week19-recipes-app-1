const linkMeatAPI = 'https://www.themealdb.com/api/json/v1/1/';
const meatAPI = (value) => (
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default meatAPI;
