import React from 'react';
import { Link } from 'react-router-dom';
// import "./RecipeDetails.css"

const RecipesList = ({ recipes }) => {
  return (
    <div className="card-deck">
      <h1>Recipes List</h1>
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


