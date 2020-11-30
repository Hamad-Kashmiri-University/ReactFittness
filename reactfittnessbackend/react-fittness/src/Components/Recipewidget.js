import React from 'react';
import '../css/recipe.css'

//the recipe widget is a quick html component to wrap information we retrive from the recipe api
const Recipewidget = ({title, calories, image, ingredients}) => {
    // props above passed in from the recipe component map func
    return(
        <div className="card">
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
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