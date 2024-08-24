import Header from "./Components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage, faMoon } from "@fortawesome/free-solid-svg-icons"
import Container from "./Components/Container"
import Socials from "./Components/Socials"

function App() {
  return (
    <>
      <Header>
        <div className="flex justify-between items-center p-3 m-3">
          <button className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faMoon} />
            <span>Darkmode</span>
          </button>
          <Socials />
        </div>
        <Container>
          <div className="w-full flex justify-between rounded-lg bg-bg overflow-hidden">
              <div className="logo flex gap-2 align-center p-3">
                <img className="logo__image" src="./logo.svg" alt="Ahmed Lemssiah Logo" style={{maxWidth:"50px"}}/>
                <h1 className="logo__content font-bold">
                  <span className="block uppercase whitespace-nowrap text-prime font-title">Ahmed Lemssiah</span>
                  <span className="text-second font-text whitespace-nowrap">Web Designer</span>
                </h1>
              </div>
              <ul className="flex items-center justify-center gap-2">
                <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Start</a></li>
                <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> About</a></li>
                <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Services</a></li>
                <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Portfolio</a></li>
              </ul>
              <button className="w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out">Kontakt</button>
          </div>
        </Container>
      </Header>
      <main>
        <section id="hero-section">
          <Container>
            
          </Container>
        </section>
      </main>
      <footer>
        
      </footer>
      <button className="text-prime hover:text-prime-100 hover:bg-bg duration-[.3s] fixed bottom-10 right-10 rounded-[50%] bg-bg w-[4rem] h-[4rem] flex justify-center items-center shadow-lg">
        <FontAwesomeIcon icon={faMessage} size="xl" />
      </button>
    </>
  )
}

export default App
