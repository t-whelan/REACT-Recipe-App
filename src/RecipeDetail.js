import React from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.pictureUrl} alt={recipe.title} className="recipe-image" />

      <p>{recipe.shortDescription}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps:</h2>
      <ol>
        {recipe.preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/" className="button-link">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetail;


