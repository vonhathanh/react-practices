export default function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients)
    }

    return (
        <main>
            <form 
                className="add-ingredient-form"
                onSubmit={onSubmit}>
                <input 
                    aria-label="Add ingredient" 
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}</li>
                })}
            </ul>
        </main>
    )
}