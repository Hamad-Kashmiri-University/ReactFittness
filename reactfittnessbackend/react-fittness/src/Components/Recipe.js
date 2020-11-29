import React , {useEffect, useState} from 'react';
import Recipewidget from  '../Components/Recipewidget'

// useeffect runs every time the page rerenders itself
const Recipe = () => {
    const APP_ID = '3f6bc118'
    const APP_KEY = '29d01eb260b41fcac13a60a4e53835d2'
    // connection id and keys
// an example request for referral with filters and url example
    const [recipes, setRecipes] = useState([]);  
    // usestate first val in the list is our var which is set to a list in the usestate function, second recipe is the getter method to set the values in the recipes var
    // declaring var for recipes list thats returned from api ^ 
    // the data type in the brackets define the type for the variable
    const [search, setSearch] = useState('')
    // defingin the string for the search bar
    const [query, setQuery] = useState('chicken')
    //query state is added to ensure page updates only when an entire string is submitted in the search bar because, search updates after every letter is typed, and the api allows only 10 requests per minute
    useEffect(() =>{
         getrecipes() 
        //  calls the data fetching function 'getrecipes' in a useeffect
    }, [query]);
        //useeffect only runs when we click on submit button because its set to run when query changes state hence [query] at the end of the function

    const getrecipes = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // request dating from the api  await means wait for the data that doesnt come back instantly,query is set to query var
        const data = await res.json();
        // need data to be in json format
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
// e is for event, so every time there is an event we run updatesearch for the search bar
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
        // resets search bar to empty
    }
    // this function stops a fetch from automatically happening after every letter is typed in the search bar due to auto page refresh
    //we prevent defaault which updates after every letter is typed, then setquery to the search which is the submitted string in the search box

    return(
        <div className="">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            {/* call update search for input in the search bar, and update search updates the state of our search var to be whatever the user input is */}

            <button className="search-button" type="submit">hello
            </button>
        </form>
        {/* map over objects in recipes array */}
        {recipes.map(recipe =>(
            <Recipewidget 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
    )

}
export default Recipe