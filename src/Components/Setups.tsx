import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { buttonVariants } from "./Assets/Button"
import { faComputer, faFlag, faGear, faMoon, faPalette, faSun } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect} from "react"
import Languages from "../Data/Languages.json"

const Setups = () => {

    const [setup, setSetup] = useState(false)
    const [lang, setLang] = useState("")
    

    const changetheInputCheckedValue = (e) => {
        setLang(e.target.dataset.abrv)
        e.target.checked = true
        document.firstElementChild.lang = e.target.dataset.abrv
    }


    const changeSetupVisibility = () => {
        setSetup(prev => !prev)

    }
    const language = String(document.firstElementChild.lang)

    useEffect(() => {
        console.log(language)
        setLang(language)
    },[])

  return (
    <div className={`setup fixed bottom-1 left-1 ${setup ? 'open':''}`}>
        <button onClick={changeSetupVisibility} className={`setup__toggler relative z-10 ${buttonVariants({variant:"rounded", sizes:"sm"})}`}>
            <FontAwesomeIcon className="setup__opener current" icon={faGear} />
        </button>
    {/* Items Start */}
        <div className="setup__items-list absolute bottom-0 right-0 pb-20 bg-bg-200 rounded-2xl w-fit left-[50%] translate-x-[-50%]">
       {/* Color Mode Elements Start */} 
            <div className="setup__items-container relative setup__color-mode">
                <div className="setup__items-toggler">
                    <label htmlFor="palette">
                        <input type="radio" 
                        name="items-toggler" id="palette"   />
                        <FontAwesomeIcon icon={faPalette} size="lg" className="rounded-t-[50%]"/>
                    </label>
                </div>
                <div className="setup__items flex gap-2 items-center">
                    <label htmlFor="dark">
                        <input type="radio" 
                        name="color-mode" id="dark"
                        />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faMoon} size="lg" />
                        </span>
                    </label>
                    <label htmlFor="light">
                        <input type="radio" 
                        name="color-mode" id="light"     
                        />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faSun} size="lg" />
                        </span>
                    </label>
                    <label htmlFor="system">
                        <input type="radio" 
                        name="color-mode" id="system" />
                        <span className="setup__text">
                            <FontAwesomeIcon icon={faComputer} size="lg" />
                        </span>
                    </label>
                </div>
            </div>
            {/* Color Mode Elements End */}
            {/* Languages Elements Start */}
            <div className="setup__items-container relative setup__lang">
                <div className="setup__items-toggler">
                    <label htmlFor="languages">
                        <input type="radio" 
                        name="items-toggler" id="languages" />
                        <FontAwesomeIcon icon={faFlag} size="lg" />
                    </label>
                </div>
                <div className="setup__items flex gap-2 items-center">
                    
                    {
                        Languages?.map((item) => (
                            <label htmlFor={item.name} key={item.id}>
                                <input type="radio" 
                                name="languages" id={item.name} data-abrv={item.abrv} checked={lang == item.abrv && true} onChange={(e) => {changetheInputCheckedValue(e)}}/>
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