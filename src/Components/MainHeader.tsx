import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "./Header"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import Socials from "./Socials"
import Container from "./Container"
import Logo from "./Logo"
import MainNav from "./MainNav"

function MainHeader() {
  return (
    <Header className="relative md:fixed md:w-full">
        <div className="flex justify-between items-center p-3 m-3">
          <button className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faMoon} />
            <span>Darkmode</span>
          </button>
          <Socials />
        </div>
        <Container>
          <div className="w-full flex justify-between rounded-lg bg-bg overflow-hidden">
              <Logo />
              <MainNav />
              <button className="hidden md:block w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out">Kontakt</button>
          </div>
        </Container>
      </Header>
  )
}

export default MainHeader