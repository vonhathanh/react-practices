import React from "react"
import Recipe from "./Recipe"
import IngredientList from "./IngredientList"


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [isRecipeShown, setIsRecipeShown] = React.useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }

    function onClick() {
        setIsRecipeShown(oldValue => !oldValue)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {
                ingredients.length > 0 &&
                <IngredientList ingredients={ingredientsListItems} onClick={onClick}/>
            }

            {
                isRecipeShown && <Recipe />
            }

        </main>
    )
}