import {Link} from 'react-router-dom'
import './Navbar.css'
import useTheme from '../Hooks/useTheme'
import {useState} from 'react'

import Searchbar from'./Searchbar'

export default function Navbar() {

    const {color,changeColor} = useTheme()
    const [number,setNumber] = useState(0)

    const handleColorChange = () => {
        setNumber(number+1)
        if(number===0){
            changeColor('green')
        }
        if(number%2===0 && number!==0){
            console.log(number);
            changeColor('black')
        }
        if(number%2===1){
            console.log(number);
            changeColor('orange')
        }
        if(number%3===0 && number!==0){
            console.log(number);
            setNumber(0)
            changeColor('blue')
        }
        
    }

    return (
        <div className="navbar" style={{background: color}}>
            <nav onClick={handleColorChange}>
                <Link to="/" className="brand">
                    <h1>Cooking ninjas</h1>
                </Link>
                <Searchbar/>
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    )
}
