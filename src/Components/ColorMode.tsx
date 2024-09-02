import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"


const ColorMode = () => {

    const [darkmode, setDarkmode] = useState(false)

    useEffect(() => {
        document.body.dataset.mode  = darkmode ? "dark" : "light"
    },[darkmode])
    
    return  <div className={`color-mode flex`} >
                <input type="checkbox" id="checkdark" name="checkdark" className="color-mode__checkbox" 
                
                onChange={(e) => {setDarkmode(e.target.checked)}}/>
                <label htmlFor="checkdark" className="h-6 overflow-hidden">
                    <span className="color-mode__dark block translate-y-[-26px] dark:translate-y-[0]">
                        <FontAwesomeIcon icon={faMoon} className="text-second" /> <span className="text-second-100">Darkmode</span>
                    </span>
                    <span className="color-mode__light block translate-y-[-26px] dark:translate-y-[0]">
                        <FontAwesomeIcon icon={faSun} className="text-prime" /> <span className="text-prime-100">Lightmode</span>
                    </span>
                </label>
            </div>
}

export default ColorMode