import Header from "./Components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMastodon } from "@fortawesome/free-brands-svg-icons"

function App() {
  return (
    <>
      <Header>
        <div className="flex justify-end">
          <ul>
            <li>
              <a href="#" className="m-2">
                  <FontAwesomeIcon icon={faMastodon}/>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-[1600px] mx-auto flex justify-between">
            <div className="logo flex gap-2 align-center">
              <img className="logo__image" src="./logo.svg" alt="Ahmed Lemssiah Logo" style={{maxWidth:"50px"}}/>
              <h1 className="logo__content font-bold">
                <span className="block uppercase whitespace-nowrap text-prime font-title">Ahmed Lemssiah</span>
                <span className="text-second font-text whitespace-nowrap">Web Designer</span>
              </h1>
            </div>
            <ul className="flex items-center justify-center gap-2">
              <li><a href="" className=" inline-block text-prime hover:text-second hover:translate-y-[-5px] font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Start</a></li>
              <li><a href="" className=" inline-block text-prime hover:text-second hover:translate-y-[-5px] font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> About</a></li>
              <li><a href="" className=" inline-block text-prime hover:text-second hover:translate-y-[-5px] font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Services</a></li>
              <li><a href="" className=" inline-block text-prime hover:text-second hover:translate-y-[-5px] font-medium p-2 px-4 m-1 transition-all duration-[.3] ease-in-out"> Portfolio</a></li>
            </ul>
            <button className="w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out">Kontakt</button>
        </div>
      </Header>
    </>
  )
}

export default App
