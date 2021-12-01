import {createContext,useReducer} from 'react'

export const ThemeContext = createContext()

const ThemeReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
        case 'NOCHANGE_COLOR':
            return {...state,color: action.payload}
        default:
            return state
    }
}

export function ThemeProvider({children}){


    const [state, dispatch] = useReducer(ThemeReducer,{
        color: 'red'
    })


    const changeColor = (color) => {
        dispatch({type:'CHANGE_COLOR',payload:color})
    }   

    return (<ThemeContext.Provider value={{color:state.color,changeColor}}>
            {children}
         </ThemeContext.Provider>)
}