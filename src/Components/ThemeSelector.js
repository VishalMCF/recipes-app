import './ThemeSelector.css'
import useTheme from '../Hooks/useTheme'
import modeIcon from '../Assets/mode.svg'

export default function ThemeSelector(){

    const {mode,changeColor,changeMode} = useTheme()

    const themeColor = ['black','blue','green','orange','pink','brown']

    const toggleMode = () => {
        mode==='dark'?changeMode('light'):changeMode('dark')
    }

    console.log(mode)

    return(
        <div className="theme-selector">
            <div className="mode-toggle">
                <img 
                src={modeIcon} 
                onClick = {toggleMode}
                style = {{filter: mode==='dark'?'invert(100%)':'invert(20%)'}}
                alt="ModeSelector" />
            </div>
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