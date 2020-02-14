import React from 'react';
import Header from './Header';
import Footer from './Footer';
import IngredientsFromAPI from './IngredientsFromAPI';
import '../styles/ingredientsExploreScreen.css';

const IngredientsExploreScreen = () => (
  <div className="Explore_Ingredients-father">
    <Header />
    <IngredientsFromAPI />
    <Footer />
  </div>
);

export default IngredientsExploreScreen;
