import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
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