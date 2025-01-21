import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage'; // Create this component or use a placeholder

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} />
      ) : (
        <RecipeListPage onSelectRecipe={setSelectedRecipe} />
      )}
    </>
  );
};