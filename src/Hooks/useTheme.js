import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function useTheme(){
    const context = useContext(ThemeContext)

    if(context===null){
        throw new Error("The context being used is outside of the scope of component")
    }

    return context
}