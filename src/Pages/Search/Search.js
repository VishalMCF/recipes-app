import {useLocation} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import RecipeList from '../../Components/RecipeList'

import './Search.css'

export default function Search() {

    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)

    const query = queryParams.get('q')

    const url = "http://localhost:8001/recipes?q="+query

    const {isPending,error,data} = useFetch(url)

    return (
        
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>Could not load the data</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
