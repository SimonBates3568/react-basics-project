
export const RecipePage = ({ recipe }) => {
    if (!recipe) {
        return <div>No recipe selected</div>;
      }

    return ( 
        <div>
            <h1>Recipe Page</h1>
            <p>{recipe}</p>
        </div>
     );
}