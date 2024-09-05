import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const ColorMode = () => {

    const isDarkEnabled = window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches

    


    const [darkmode, setDarkmode] = useState(() => {
        const savedLocalStorageTheme = window.localStorage.getItem("portfolioTheme")

        return savedLocalStorageTheme ? savedLocalStorageTheme === "dark" :isDarkEnabled

       
    })

    useEffect(() => {
        //Body dataset mode
            
            document.body.dataset.mode  = darkmode ? "dark" : "light"
            window.localStorage.portfolioTheme = darkmode ? "dark" : "light"
       

    },[darkmode])

  
    
    useEffect(() => {
       if(window.localStorage.getItem("portfolioTheme")){
        document.body.dataset.mode = String(window.localStorage.getItem("portfolioTheme"))
       }else{
        document.body.dataset.mode = isDarkEnabled ? "dark" : "light"
         window.localStorage.portfolioTheme = isDarkEnabled ? "dark" : "light"
       }
    },[])
    
    
    return  <div className={`color-mode flex`} >
                <input type="checkbox" id="checkdark" name="checkdark" className="color-mode__checkbox hidden" 
                checked={darkmode}
                onChange={(e) => {setDarkmode(e.target.checked)}}/>
                <label htmlFor="checkdark" className="h-6 overflow-hidden">
                    <span className="color-mode__dark block translate-y-[-26px] dark:translate-y-[0]">
                        <FontAwesomeIcon icon={faMoon} className="text-second" /> <span className="text-second-100 font-medium uppercase">Darkmode</span>
                    </span>
                    <span className="color-mode__light block translate-y-[-26px] dark:translate-y-[0]">
                        <FontAwesomeIcon icon={faSun} className="text-prime" /> <span className="text-prime-100 font-medium uppercase">Lightmode</span>
                    </span>
                </label>
            </div>
}

export default ColorMode