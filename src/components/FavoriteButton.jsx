import React from 'react';
import Heart from '../img/heart.svg';
import RedHeart from '../img/redheart.svg';
import '../styles/FavoriteIcon.css';
import { useEffect } from 'react';
import { useState } from 'react';

function addOrRemoveFavorite(data, isFavorited, setIsFavorited) {
  if (!isFavorited) {
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([data]));
      return setIsFavorited(true);
    }
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...JSON.parse(localStorage.favoriteRecipes), data]),
    );
    return setIsFavorited(true);
  }
  localStorage.favoriteRecipes = JSON.stringify(
    JSON.parse(localStorage.favoriteRecipes).filter(
      (favorite) => favorite.id !== data.id,
    ),
  );
  return setIsFavorited(false);
}

function FavoriteButton({ data }) {
  const [isFavorited, setIsFavorited] = useState();
  useEffect(() => {
    const favorites = localStorage.favoriteRecipes;
    if (!favorites) return setIsFavorited(false);
    const findFavorite = JSON.parse(favorites).find(
      (favorite) => favorite.id === data.id,
    );
    if (findFavorite) {
      return setIsFavorited(true);
    }
    return setIsFavorited(false);
  });

  return (
    <input
      onClick={() => addOrRemoveFavorite(data, isFavorited, setIsFavorited)}
      type="image"
      src={isFavorited ? RedHeart : Heart}
      className="favorite-icon"
    />
  );
}

export default FavoriteButton;
