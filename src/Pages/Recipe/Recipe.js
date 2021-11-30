import './Recipe.css'
import { useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'

export default function Recipe() { 

    const param = useParams()
    
    const {data:recipe,isPending,error} = useFetch(`http://localhost:8001/recipes/${param.id}`)

    return (
        <div class="recipe">
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
