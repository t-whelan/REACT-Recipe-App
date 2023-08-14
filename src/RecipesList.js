import React from 'react';
import { Link } from 'react-router-dom';

const RecipesList = ({ recipes }) => {
  return (
    <div>
      <h1>Recipes List</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.shortDescription}</p>
          <div className="centered-button-container">
  <Link to={`/recipe/${recipe.id}`} className="centered-button">View Recipe</Link>
</div>

        </div>
      ))}
    </div>
  );
};

export default RecipesList;


