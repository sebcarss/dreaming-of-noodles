export default function Ingredients({ postData }) {
  const ingredients = postData.ingredients;
  const ingredientsList = ingredients.map(function (ingredient, index) {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>{ingredientsList}</ul>
    </div>
  );
}
