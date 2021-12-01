import './RecipeList.css'
import {Link,useHistory} from 'react-router-dom'

import { useEffect} from 'react'

export default function RecipeList({recipes}) {


    const history = useHistory()

    useEffect(()=>{
        if(recipes.length===0){
            console.log("set to null");
            setTimeout(()=>{
                history.push('/')
            },5000)
            
        }
    },[recipes,history])

    if(recipes.length===0){
        return(
            <div>
                <p>No Recipes were Found for the netered search term</p>
            </div>
        )
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe)=>{
                return (
                    <div key={recipe.id} className="card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make</p>
                        <div>
                            {recipe.method.substring(0,100)}...
                        </div>
                        <Link to={`/recipe/${recipe.id}`} className="cook-this">Cook this</Link>
                    </div>
                )
            })}
        </div>
    )
}
