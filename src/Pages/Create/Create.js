import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import useFetch from '../../Hooks/useFetch';

import './Create.css'

export default function Create() {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [allIngredients, setAllIngredients] = useState([]);
    const [ingredient, setIngredient] = useState("");
    const history = useHistory()

    const {postData,data} = useFetch("http://localhost:8001/recipes","POST");

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(title, method, cookingTime)
        postData({title,ingredients:allIngredients,method,cookingTime:cookingTime+" minutes"})
    }

    const handleAddIngredient = (e)=>{
        e.preventDefault()
        if(ingredient && !allIngredients.includes(ingredient)){
            setAllIngredients((prevAllIngredients)=>{
                return [...prevAllIngredients,ingredient]
            })
        }
        setIngredient("");
    }

    useEffect(() => {
        if(data){
            console.log("The data returned after post request is : ",data)
            history.push('/')
        }
    },[data,history])

    return (
        <div className="create">
            <h2 className="page-title"> Add a New Recipe </h2>

            <form onSubmit={handleFormSubmit}>
                <label>
                    <span>Title</span>
                    <input type="text" 
                    onChange = {(e)=>setTitle(e.target.value)}
                    value = {title}
                    required/>
                </label>

                <label>
                    <span>Method</span>
                    <textarea
                    onChange = {(e)=>setMethod(e.target.value)}
                    value = {method}
                    required/>
                </label>

                {/* Ingredients */}

                <label>
                    <span>Ingredients</span>
                    <div className="ingredients">
                        <input type="text" 
                            onChange={(e)=>{setIngredient(e.target.value)}}
                            value={ingredient}
                        />
                        <button className="btn" onClick={handleAddIngredient}>add</button>
                    </div>
                </label>
                <p>Current Ingredients: {allIngredients.map((i) => <em key={i}>{i+"   "}</em>)} </p>

                <label>
                    <span>Cooking Time</span>
                    <input type="number" 
                    onChange = {(e)=>setCookingTime(e.target.value)}
                    value = {cookingTime}
                    required/>
                </label>

                <button className="btn" >Submit</button>
            </form>
        </div>
    )
}
