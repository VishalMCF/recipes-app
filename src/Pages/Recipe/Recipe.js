import './Recipe.css'
import { useParams} from 'react-router-dom'

import {project_firestore} from '../../Firebase/config'
import { useEffect, useState } from 'react'

export default function Recipe() { 

    const param = useParams()
    
    const [recipe, setRecipe] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setIsPending(true)
        project_firestore.collection('recipes').doc(param.id).get().then((doc)=>{
            if(doc.exists){
                setIsPending(false)
                setRecipe(doc.data())
            }else{
                setIsPending(false)
                setError('Could not find that recipe')
            }
        }).catch((err)=>{
            setError(err.message)
            setIsPending(false)
        })
    },[param.id])
    
    console.log("The id of the recipe which you chose is "+param.id)

    return (
        <div className="recipe">
            {error && <div className="error">{error}</div>}
            {isPending && <h2>Loading.....</h2>}
            {recipe && <div>
                        <h2 className="page-title">{recipe.title}</h2>
                        <p>Takes {recipe.cookingTime} to cook</p>
                        <ul>
                            {recipe.ingredients.map((ingredient,index)=>(
                                <li key={index}>
                                     {ingredient}
                                </li>
                            ))}
                        </ul>
                        <p className="method">{recipe.method}</p>
                    </div>}
        </div>
    )
}
