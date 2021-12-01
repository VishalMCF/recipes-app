import './ThemeSelector.css'
import useTheme from '../Hooks/useTheme'

export default function ThemeSelector(){

    const {changeColor} = useTheme()

    const themeColor = ['black','blue','green','orange']

    return(
        <div className="theme-selector">
            <div class="theme-buttons">
                {themeColor.map((theme)=>{
                    return (
                        <div key={theme}
                         onClick={()=>changeColor(theme)}
                         style = {{background: theme}}
                        />
                    )
                })}
            </div>
        </div>
    )
}