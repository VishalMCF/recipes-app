
// import css
import { useState } from 'react'
import { useHistory } from 'react-router';
import './Searchbar.css'

export default function Searchbar() {

    const [term,setTerm] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault()
        // crate query parameter

        history.push(`/search?q=${term}`)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <div className="search">
                <label htmlFor="search">Search: </label>
                <input type="text"
                id="search"
                onChange={(e)=>{setTerm(e.target.value)}} 
                required/>
                </div>
            </form>
        </div>
    )
}


