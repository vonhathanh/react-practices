export default function IngredientList({ingredients, onClick}) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredients}</ul>
            {
                ingredients.length >= 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={onClick}>Get a recipe</button>
                </div>
            }

        </section>
    )
}