import './Recipe.css'
import { useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'

export default function Recipe() { 

    const param = useParams()
    
    const {data:recipe,isPending,error} = usefetch(`http://localhost:8000/recipes/${param.id}`)

    return (
        <div class="recipe">
            {error && <div className="error">{error}</div>}
            {isPending && <h2>Loading.....</h2>}
            {recipe && <div>
                        <h2>{recipe.title}</h2>
                        
                    </div>}
        </div>
    )
}
