import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { buttonVariants } from "./Assets/Button"
import { faComputer, faFlag, faGear, faMoon, faPalette, faSun, faTimes } from "@fortawesome/free-solid-svg-icons"
import {  useEffect, useState} from "react"
import Languages from "../Data/Languages.json"
import { cn } from "../libs/utils"

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
            if(storageColorTheme == "dark"){
                return "dark"
            }else{
                return "light"
            }
        }else{
          if(isDarkMode){
            return "dark"
          }else{
            return "light"
          }
        }
    })

    

    useEffect(() => {
        if(storageColorTheme){
            document.body.dataset.mode = storageColorTheme
        }else{
            document.body.dataset.mode = isDarkMode ? "dark" : "light"
        }
    },[])


    const changeColorMode = (e:React.ChangeEvent<HTMLInputElement>) => {
        setColorMode(e.target.value)
    }

    useEffect(() => {
        document.body.dataset.mode = colorMode
        window.localStorage.setItem("portfolioTheme", colorMode)
        if(colorMode === 'system') {
            window.localStorage.removeItem("portfolioTheme")
            document.body.dataset.mode = isDarkMode ? "dark" : "light"
        }
    },[colorMode, isDarkMode])
    

  return (
    <div className={`setup fixed bottom-1 left-1 ${setup ? 'open':''}`}>
        <button onClick={changeSetupVisibility} className={cn("setup__toggler relative z-10", buttonVariants({variant:"rounded", sizes:"sm"}))}>
           {
            setup ? ( <FontAwesomeIcon className="setup__opener current" icon={faTimes} size="xl"/>)
            : ( <FontAwesomeIcon className="setup__opener current" icon={faGear} size="xl"/>)
           }
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
                <div className="setup__items absolute top-0 bottom-0 left-[100%] flex items-center" 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {changeColorMode(e)}}>
                    <label htmlFor="dark">
                        <input type="radio" hidden 
                        name="color-mode" id="dark"
                        value="dark"
                        checked={colorMode === 'dark'}
                        readOnly
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
                        readOnly
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
                        readOnly
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
                <div className="setup__items absolute top-0 bottom-0 left-[100%] flex items-center">
                    
                    {
                        Languages?.map((item) => (
                            <label htmlFor={item.name} key={item.id}>
                                <input type="radio" hidden 
                                name="languages" id={item.name} data-abrv={item.abrv} />
                                <span className="setup__text" >
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