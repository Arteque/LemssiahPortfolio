import { buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

function Start() {
  


  return (
    <>
        <section id="hero-section">
          <Container>
             <div className="hero md:flex md:flex-col-reverse md:justify-start md:min-h-[70svh] ">
                <div className="hero__media">
                  <div className="hero__main-image">
                    <img className="max-w-[70vw] mx-auto md:max-w-[50svh]" src="./AvatarMain.svg" alt="Ahmed Lemssiah Avatar" />
                  </div>
                </div>
                <div className="hero__content">
                  <h2 className="text-center">
                    <strong className="block text-[2rem] w-full font-black text-prime
                    md:text-[4rem]
                    ">Ahmed <em className="uppercase not-italic text-second">Lemssiah</em> </strong>
                    <span className="text-[1.5rem] md:text-[1.8rem]">Mediengestalter & Frontend Webentwickler</span>
                  </h2>
                 
                  <div className="hero__call flex justify-center mt-5 gap-5">
                    <Link className={`${buttonVariants({variant:"full"})}`} to="/kontakt">kontakt</Link>
                    <Link className={`${buttonVariants({variant:"outline"})}`} to="/portfolio">Portfolio</Link>
                  </div>
                </div>
             </div>
          </Container>
        </section>
    </>
  )
}

export default Start