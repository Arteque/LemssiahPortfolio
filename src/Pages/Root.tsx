import { Outlet } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter"
import { useLocation } from "react-router-dom"
import { useState} from "react"
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