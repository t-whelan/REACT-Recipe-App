import React from 'react';
// import './RecipeDetails.css';
import { Link, useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container">
      <div className="recipe-details">
      <h1 className="title-recipe">{recipe.title}</h1>
        <div className="row">
            <div className="col-md-3">
        <img src={recipe.pictureUrl} alt={recipe.title} className="recipe-image" />
      <p className="description">{recipe.shortDescription}</p>
  </div>
  <div className="col-md-3">
   <div className="ingredients-container">
      <h2 className="ingredients">Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
       </ul>
     </div>
    </div>
    </div>
     <div className="steps-container">
      <h2 className="steps">Preparation Steps:</h2>
      <ol className="preparation-steps">
        {recipe.preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
        </div>
      <Link to="/" className="back-to-recipes">Back to Recipes List</Link>
    </div>
  </div>
  );
};

export default RecipeDetail;


