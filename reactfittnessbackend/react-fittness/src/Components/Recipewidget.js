import React from 'react';
import '../css/recipe.css'

const Recipewidget = ({title, calories, image, ingredients}) => {
    // props above passed in from the recipe component map func
    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img src={image} alt =""></img>

        </div>
    )
}

export default Recipewidget