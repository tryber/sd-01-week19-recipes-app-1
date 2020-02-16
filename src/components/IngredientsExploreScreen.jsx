import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import IngredientsFromAPI from './IngredientsFromAPI';
import context from '../context/context';
import '../styles/ingredientsExploreScreen.css';

const IngredientsExploreScreen = () => {
  const { ingredient, setIngredient } = useContext(context);
  return (
    <div className="Explore_Ingredients-father">
      <Header />
      <IngredientsFromAPI
        ingredient={ingredient}
        setIngredient={setIngredient}
      />
      <div className="Explore_Ingredients-footer">
        <Footer />
      </div>
    </div>
  );
};

export default IngredientsExploreScreen;
