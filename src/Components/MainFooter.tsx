import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "./Container"
import KontaktForm from "./KontaktForm"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import Logo from "./Logo"
import MainNav from "./MainNav"
import Socials from "./Socials"
import Header from "./Header"

interface MainFooterProps{
    showkontakt:unknown,
    changeShowKontaktState:unknown
}

const MainFooter:FC<MainFooterProps>=({showkontakt,changeShowKontaktState}) => {

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
        <button className="z-[99999999] text-prime hover:text-prime-100 hover:bg-bg duration-[.3s] fixed bottom-1 right-1 md:bttom-5 md:right-5 rounded-[50%] bg-bg w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex justify-center items-center shadow-lg" 
        onClick={changeShowKontaktState}>
            <FontAwesomeIcon icon={faMessage} size="lg" />
        </button>
    </>
  )
}

export default MainFooter