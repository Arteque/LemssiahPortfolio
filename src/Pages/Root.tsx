import { Outlet } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter"
import { useLocation } from "react-router-dom"
import { useEffect, useState} from "react"
import Container from "../Components/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
// import Details from "../Components/Details"
// import readme from "../Projects/dictionary-api/readme.md"
function Root() {


  const locationPath = useLocation()

  //FormState
  const [formState, setFormState] = useState(false)

  const changetheFormState = () => {
    setFormState(prev => !prev)
  }


  

  return (
    
      <>
          <MainHeader toggleForm={changetheFormState}/>
            <main className={`page-${locationPath.pathname.replace("/","")}`}>
              <Outlet />
            </main>
          <MainFooter showkontakt={formState} toggleForm={changetheFormState}/>
          {/* <Details projectPath={readme}/> */}
          
    </>
  )
}

export default Root