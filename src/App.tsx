import Header from "./Components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage, faMoon } from "@fortawesome/free-solid-svg-icons"
import Container from "./Components/Container"
import Socials from "./Components/Socials"
import KontaktForm from "./Components/KontaktForm"
import { useState } from "react"

function App() {

const [showkontakt, setShowkontakt] = useState(false)





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
              <nav className="">
                <ul className="absolute top-10 right-1 left-1 bg-bg py-5 z-[999]  md:flex md:items-center md:justify-center md:gap-2 md:bg-opacity-0">
                  <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Start</a></li>
                  <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> About</a></li>
                  <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Services</a></li>
                  <li><a href="" className=" inline-block text-prime hover:text-second font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Portfolio</a></li>
                </ul>
              </nav>
              <button className="w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out">Kontakt</button>
          </div>
        </Container>
      </Header>
      <main>
        <section id="hero-section" className="min-h-[50svh]">
          <Container>
             <div className="slider">
                <div className="slider__media">
                  <div className="slider__main-image">
                    <img className="max-w-[70vw] mx-auto" src="./AvatarMain.svg" alt="Ahmed Lemssiah Avatar" />
                  </div>
                </div>
                <div className="slider__content">
                  <h2 className="text-center">
                    <strong className="block text-[2rem] w-full font-black text-prime">Ahmed Lemssiah </strong>
                    <span>Mediengestalter & Frontend Webentwickler</span>
                  </h2>
                </div>
             </div>
          </Container>
        </section>
      </main>
      <footer>
        
      </footer>
      <KontaktForm show={showkontakt ? 'show' : ''}/>
      <button className="text-prime hover:text-prime-100 hover:bg-bg duration-[.3s] fixed bottom-10 right-10 rounded-[50%] bg-bg w-[4rem] h-[4rem] flex justify-center items-center shadow-lg" onClick={() => {setShowkontakt(prev => !prev)}}>
        <FontAwesomeIcon icon={faMessage} size="xl" />
      </button>
    </>
  )
}

export default App
