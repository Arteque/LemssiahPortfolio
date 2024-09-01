import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

interface ColorModeProps {
    isDark?:any
}

const ColorMode:FC<ColorModeProps> = ({isDark}) => {
    
    return  <div className={`color-mode flex`} onClick={isDark}>
                <input type="checkbox" id="checkdark" name="checkdark" className="color-mode__checkbox hidden" />
                <label htmlFor="checkdark" className="h-6 overflow-hidden">
                    <span className="color-mode__dark block">
                        <FontAwesomeIcon icon={faMoon} className="text-second" /> <span className="text-second-100">Darkmode</span>
                    </span>
                    <span className="color-mode__light block">
                        <FontAwesomeIcon icon={faSun} className="text-prime" /> <span className="text-prime-100">Lightmode</span>
                    </span>
                </label>
            </div>
}

export default ColorMode