import React from 'react';
import Header from './Header';
import Footer from './Footer';
import IngredientsFromAPI from './IngredientsFromAPI';
import '../styles/ingredientsExploreScreen.css';

const IngredientsExploreScreen = () => (
  <div className="Explore_Ingredients-father">
    <Header />
    <IngredientsFromAPI />
    <div className="Explore_Ingredients-footer">
      <Footer />
    </div>
  </div>
);

export default IngredientsExploreScreen;
