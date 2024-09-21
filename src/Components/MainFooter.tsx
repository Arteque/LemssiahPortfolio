import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "./Container"
import KontaktForm from "./KontaktForm"
import { faMessage, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import Logo from "./Logo"
import MainNav from "./MainNav"
import Socials from "./Socials"
import Header from "./Header"
import { buttonVariants } from "./Assets/Button"
import Setups from "./Setups"

interface MainFooterProps{
    showkontakt:unknown,
    toggleForm:() => void
}

const MainFooter:FC<MainFooterProps>=({showkontakt,toggleForm}) => {

    const thisYear  = () => {
        return new Date().toLocaleDateString("de-DE",{year:'numeric'})
    }

   // const [showkontakt, setShowkontakt] = useState(false)

  return (
    <>
        <footer className="bg-bg pt-10">
           <Header>
                <Container >
                    <div className="md:flex md:justify-between pt-11">
                        <Logo />
                        <MainNav variant="footer" />
                        <Socials />
                    </div>
                </Container>
               
           </Header>
           <div className="footer__legal  bg-prime">
                <p className="md:max-w-[50%] mx-auto text-center text-second pt-5 pb-2">
                    <samp>Ahmed <em className="not-italic uppercase">Lemssiah</em> {thisYear()} &copy;  alle Rechte vorbehalten</samp>
                </p>
            </div>
        </footer>
        <KontaktForm show={showkontakt ? 'show' : ''}/>
        <button className={`z-[99999999] fixed bottom-1 right-1 md:bttom-5 md:right-5 ${buttonVariants({variant:"rounded"})} `} 
        onClick={toggleForm}>
            {
                showkontakt ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faMessage} size="lg" />
            }
        </button>
        <Setups />
        
    </>
  )
}

export default MainFooter