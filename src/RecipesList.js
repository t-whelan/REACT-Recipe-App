import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header.js"

const RecipesList = ({ recipes }) => {
  return (
    <Header />
    <div className>
    <h1>Recipes List</h1>
    </div>
    <br/>
    <div className="card-deck">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <p className="card-text">{recipe.shortDescription}</p>
              <img
               src={recipe.pictureUrl}
              className="card-img"
             alt={recipe.title}/>
               </div>
          <div className="centered-button-container">
  <Link to={`/recipe/${recipe.id}`} className="centered-button">View Recipe</Link>
</div>

        </div>
      ))}
    </div>
  );
};

export default RecipesList;


