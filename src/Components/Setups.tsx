import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { buttonVariants } from "./Assets/Button"
import { faComputer, faFlag, faGear, faMoon, faPalette, faSun } from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, FormEvent, useEffect, useState} from "react"
import Languages from "../Data/Languages.json"

const Setups = () => {


   //Setup Btn to open the color mode and langues option items
    const [setup, setSetup] = useState(false)

    const changeSetupVisibility = () => {
        setSetup(prev => !prev)
    }


    // setup the darkmode element 
    // 1 - Get the system prefered color scheme (if its not dark is light ;))
    // 2 - check if in the localStorage the "PortfolioTheme" mode is saved.
    // 3 - the "CheckedMode" variable is onload set to the localsotrage first if not to the system color scheme
    const isDarkMode = window.matchMedia && window.matchMedia((`(prefers-color-scheme:dark)`)).matches
    const storageColorTheme = window.localStorage.getItem("portfolioTheme")
    
    const [colorMode, setColorMode] = useState(() => {
        if(storageColorTheme){
            return storageColorTheme
        }else{
            return ""
        }
    })
    const changeColorMode = (e) => {
        setColorMode(e.target.value)
    }
    
  return (
    <div className={`setup fixed bottom-1 left-1 ${setup ? 'open':''}`}>
        <button onClick={changeSetupVisibility} className={`setup__toggler relative z-10 ${buttonVariants({variant:"rounded", sizes:"sm"})}`}>
            <FontAwesomeIcon className="setup__opener current" icon={faGear} />
        </button>
    {/* Items Start */}
        <div className="setup__items-list absolute bottom-[100%] left-0 right-0 " >
       {/* Color Mode Elements Start */} 
            <div className="setup__items-container relative setup__color-mode flex justify-center items-center">
                <div className="setup__items-toggler ">
                    <label htmlFor="palette">
                        <input type="radio" hidden 
                        name="items-toggler" id="palette"   />
                        <FontAwesomeIcon icon={faPalette} size="lg" className="text-prime p-4 bg-bg-100"/>
                    </label>
                </div>
                <div className="setup__items absolute top-0 -right-5 flex gap-2 items-center" onChange={(e) => {changeColorMode(e)}}>
                    <label htmlFor="dark">
                        <input type="radio" hidden 
                        name="color-mode" id="dark"
                        value="dark"
                        checked={colorMode === 'dark'}
                        
                        />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faMoon} size="lg" />
                        </span>
                    </label>
                    <label htmlFor="light">
                        <input type="radio" hidden 
                        name="color-mode" id="light" 
                        value="light"
                        checked={colorMode === 'light'}
                        
                        />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faSun} size="lg" />
                        </span>
                    </label>
                    <label htmlFor="system">
                        <input type="radio" hidden 
                        name="color-mode" id="system" 
                        value="system"
                        checked={colorMode === 'system'}
                        
                        />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faComputer} size="lg" />
                        </span>
                    </label>
                </div>
            </div>
            {/* Color Mode Elements End */}
            {/* Languages Elements Start */}
            <div className="setup__items-container relative setup__lang flex justify-center items-center">
                <div className="setup__items-toggler">
                    <label htmlFor="languages">
                        <input type="radio" hidden 
                        name="items-toggler" id="languages" />
                        <FontAwesomeIcon icon={faFlag} size="lg" className="text-prime  p-4 bg-bg-100"/>
                    </label>
                </div>
                <div className="setup__items absolute top-0 -right-5 flex gap-2 items-center">
                    
                    {
                        Languages?.map((item) => (
                            <label htmlFor={item.name} key={item.id}>
                                <input type="radio" hidden 
                                name="languages" id={item.name} data-abrv={item.abrv} />
                                <span className="setup__text">
                                    {item.abrv}
                                </span>
                            </label>
                        ))
                    }
                </div>
            </div>
            {/* Languages Elements End */}
        </div>
    {/* Items Start */}

    </div>
  )
}

export default Setups