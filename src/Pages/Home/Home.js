
import { useEffect, useState } from 'react'

import {project_firestore} from '../../Firebase/config'
import RecipeList from '../../Components/RecipeList'

export default function Home() {

    const [data, setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        setIsPending(true)
        project_firestore.collection('recipes').get().then((snapshot)=>{
            if(snapshot.empty){
                setError("No recipe found!!")
                setIsPending(false)
            }else{
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }).catch((err)=>{
            setError(err.message)
            setIsPending(false)
        })
    },[])

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading"> Loading.....</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
