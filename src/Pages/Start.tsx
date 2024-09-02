import { Button, buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

function Start() {
  


  return (
    <>
        <section id="hero-section">
          <Container>
             <div className="hero md:flex md:items-center gap-2 md:justify-start md:min-h-[50svh] ">
                <div className="hero__media md:w-2/5">
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
        <section id="service-section" className="section bg-bg-100 ">
          <Container>
            <div className="section__content flex gap-2 justify-between">
              <div className="card--media max-w-[450px] p-5  rounded-lg  border-bg-100">
                  <div className="card__header relative">
                     <img className="w-[70%] mx-auto block" src="./cartoonFinder.svg" alt="Ideen Erfinder" />
                     <div className="mediacollection absolute top-0 left-0 w-full h-full animate-spin-slower">
                        <img className="block rotate-10 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[120px] max-h-[120px]" src="./Erfinder/Element 3.svg" alt="Analyse" />
                        <img className="block rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[120px] max-h-[120px]" src="./Erfinder/LaborFlasche1.svg" alt="Laborflasche" />
                        <img className="block rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[120px] max-h-[120px]" src="./Erfinder/LaborMischFlasche1.svg" alt="Labor Misch Flasche" />
                        <img className="block rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[120px] max-h-[120px]" src="./Erfinder/Mikroskop.svg" alt="Labor Misch Flasche" />
                     </div>
                  </div>
                  <div className="card__body z-10 backdrop-blur-lg">
                    <div className="card__title">
                        <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Ideen</span><span className="text-second font-black uppercase">erfinder</span></h3>
                    </div>
                    <div className="card__text">
                      <p>
                        Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                        Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                      </p>
                    </div>
                  </div>
                  <div className="card__footer">
                    <div className="card__links">
                        <Button variant="full">Mehr</Button>
                    </div>
                  </div>
              </div>
              <div className="card--media max-w-[450px] p-5  rounded-lg  border-bg-100">
                  <div className="card__header relative">
                     <img className="w-[70%] mx-auto block" src="./cartoonDesign.svg" alt="Ideen Künstler" />
                     <div className="mediacollection absolute top-0 left-0 w-full h-full rotate-306 animate-spin-slower">
                        <img className="block rotate-36 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[120px] max-h-[120px]" src="./Designer/brush.svg" alt="Pinsel" />
                        <img className="block rotate-0 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[120px] max-h-[120px]" src="./Designer/colorBlue_1.svg" alt="Blaue Farbe" />
                        <img className="block rotate-245 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[120px] max-h-[120px]" src="./Designer/piplette.svg" alt="Piplette" />
                        <img className="block rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[120px] max-h-[120px]" src="./Designer/colorplaett.svg" alt="Farbpalette" />
                     </div>
                  </div>
                  <div className="card__body z-10 backdrop-blur-lg">
                    <div className="card__title">
                        <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Digitaler</span> <span className="text-second font-black uppercase">Künstler</span></h3>
                    </div>
                    <div className="card__text">
                      <p>
                        Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                        Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                      </p>
                    </div>
                  </div>
                  <div className="card__footer">
                    <div className="card__links">
                        <Button variant="full">Mehr</Button>
                    </div>
                  </div>
              </div>
              <div className="card--media max-w-[450px] p-5  rounded-lg  border-bg-100">
                  <div className="card__header relative">
                     <img className="w-[70%] mx-auto block" src="./cartoonDev.svg" alt="Ideen Erfinder" />
                     <div className="mediacollection absolute top-0 left-0 w-full h-full animate-spin-slower">
                        <img className="block rotate-10 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[120px] max-h-[120px]" src="./Entwickler/calendar.svg" alt="Analyse" />
                        <img className="block rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[120px] max-h-[120px]" src="./Entwickler/keyboard.svg" alt="Laborflasche" />
                        <img className="block rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[120px] max-h-[120px]" src="./Entwickler/mouse.svg" alt="Labor Misch Flasche" />
                        <img className="block rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[120px] max-h-[120px]" src="./Entwickler/screen.svg" alt="Labor Misch Flasche" />
                     </div>
                  </div>
                  <div className="card__body z-10 backdrop-blur-lg">
                    <div className="card__title">
                        <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Browser</span><span className="text-second font-black uppercase">flüsterer</span></h3>
                    </div>
                    <div className="card__text">
                      <p>
                        Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                        Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                      </p>
                    </div>
                  </div>
                  <div className="card__footer">
                    <div className="card__links">
                        <Button variant="full">Mehr</Button>
                    </div>
                  </div>
              </div>
            </div>
          </Container>
        </section>
    </>
  )
}

export default Start