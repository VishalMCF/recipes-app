import {Link} from 'react-router-dom'
import './Navbar.css'
import useTheme from '../Hooks/useTheme'

import Searchbar from'./Searchbar'
import ThemeSelector from './ThemeSelector'

export default function Navbar() {

    const {color} = useTheme()

    return (
        <div className="navbar" style={{background: color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking ninjas</h1>
                </Link>
                <Searchbar/>
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    )
}
