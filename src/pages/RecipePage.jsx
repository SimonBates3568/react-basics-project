import React from 'react';

export const RecipePage = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe selected</div>;
  }

  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};