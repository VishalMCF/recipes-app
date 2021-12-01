import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import Recipe from './Pages/Recipe/Recipe'
import Search from './Pages/Search/Search'
import Navbar from './Components/Navbar'
import ThemeSelector from './Components/ThemeSelector'

import './App.css'
import useTheme from './Hooks/useTheme'

function App() {

  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>

        <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/recipe/:id">
            <Recipe/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
