import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    function onSubmit(formData) {
        const ingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }

    return (
        <main>
            <form 
                className="add-ingredient-form" action={onSubmit}>
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