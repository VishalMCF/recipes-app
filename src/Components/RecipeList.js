import './RecipeList.css'
import {Link,useHistory} from 'react-router-dom'

import { useEffect} from 'react'
import useTheme from '../Hooks/useTheme'

export default function RecipeList({recipes}) {


    const history = useHistory()

    const {mode} = useTheme()

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
                    <div key={recipe.id} className={`card ${mode}`}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make</p>
                        <div>
                            {recipe.method.substring(0,100)}...
                        </div>
                        <Link to={`/recipe/${recipe.id}`} className={`cookthis ${mode}`}>Cook this</Link>
                    </div>
                )
            })}
        </div>
    )
}
