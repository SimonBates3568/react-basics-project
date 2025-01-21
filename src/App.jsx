import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage'; // Create this component or use a placeholder

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onSelectRecipe={handleSelectRecipe}/>
      ) : (
        <RecipeListPage onSelectRecipe={handleSelectRecipe} />
      )}
    </>
  );
};



