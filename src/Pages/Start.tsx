import {  buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Assets/Card'

function Start() {
  


  return (
    <>
        <section id="hero-section">
          <Container>
             <div className="hero md:flex md:items-center gap-2 md:justify-start md:min-h-[70svh] ">
                <div className="hero__media md:w-2/5 md:self-end">
                  <div className="hero__main-image">
                    <img className="max-w-[70vw] mx-auto md:max-w-[50svh]" src="./AvatarMain.svg" alt="Ahmed Lemssiah Avatar" />
                  </div>
                </div>
                <div className="hero__content">
                  <h2 className="text-center">
                    <strong className="block text-[2rem] w-full font-black text-prime
                    md:text-[4rem]
                    ">Ahmed <em className="uppercase not-italic text-second">Lemssiah</em> </strong>
                    <span className="text-[1.5rem] md:text-[1.8rem] text-text">Mediengestalter & Frontend Webentwickler</span>
                  </h2>
                 
                  <div className="hero__call flex justify-center mt-5 gap-5 md:justify-normal">
                    <Link className={`${buttonVariants({variant:"full"})}`} to="/kontakt">kontakt</Link>
                    <Link className={`${buttonVariants({variant:"outline"})}`} to="/portfolio">Portfolio</Link>
                  </div>
                </div>
             </div>
          </Container>
        </section>
        <section id="service-section" className="section bg-bg-200 pb-[5rem] ">
          <Header variant="section">
            <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Was kann ich?</h2>
            <p className="text-prime">Websites Design und Entwicklung ist vielfaltig <em>wie ich</em></p>
          </Header>
          <Container>
            <div className="section__content flex gap-2 justify-between">
              <Card variant="default" className="card p-0">
                <div className="card__header relative max-h-[270px]">
                    <div className="card__bg-img">
                      <img src="./AdobeStock_852213050.jpeg" className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.6] object-cover" alt="Labor Hintergrund" />
                    </div>
                      <div className="card__main-img overflow-hidden w-full">
                        <img className="w-[50%] max-w-[200px] mx-auto block z-5 relative translate-y-5" src="./cartoonFinder.svg" alt="Ideen Erfinder" />
                      </div>
                      <div className="mediacollection absolute top-0 left-0 w-full aspect-square animate-spin-slower">
                          <img className="block z-10 drop-shadow-soft rotate-10 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[100px]" src="./Erfinder/Element 3.svg" alt="Analyse" />
                          <img className="block z-10 drop-shadow-soft rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[100px]" src="./Erfinder/LaborFlasche1.svg" alt="Laborflasche" />
                          <img className="block z-10 drop-shadow-soft rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src="./Erfinder/LaborMischFlasche1.svg" alt="Labor Misch Flasche" />
                          <img className="block z-10 drop-shadow-soft rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[100px] max-h-[100px]" src="./Erfinder/Mikroskop.svg" alt="Labor Misch Flasche" />
                      </div>
                    </div>
                    <div className="card__body bg-bg-200/[1] p-5  mb-5 z-10 backdrop-blur-lg">
                      <div className="card__title">
                          <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Ideen</span><span className="text-second font-black uppercase">erfinder</span></h3>
                      </div>
                      <div className="card__text">
                        <p className="text-text-100 font-medium my-3">
                          Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                          Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                        </p>
                      </div>
                    </div>
              </Card>
              <div className="card--media max-w-[450px] rounded-lg  border-bg-100 bg-bg-100">
                  <div className="card__header relative max-h-[270px]">
                    <div className="card__bg-img">
                      <img src="./AdobeStock_792048373.jpeg" className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.6] object-cover "  alt="Atelier" />
                    </div>
                    <div className="card__main-img overflow-hidden w-full">
                      <img className="w-[50%] max-w-[200px] mx-auto block z-5 relative translate-y-5" src="./cartoonDesign.svg" alt="Ideen Künstler" />
                    </div>
                     <div className="mediacollection absolute top-0 left-0 w-full aspect-square rotate-306 animate-spin-slower">
                        <img className="block rotate-36 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[100px]" src="./Designer/brush.svg" alt="Pinsel" />
                        <img className="block rotate-0 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[100px]" src="./Designer/colorBlue_1.svg" alt="Blaue Farbe" />
                        <img className="block rotate-245 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src="./Designer/piplette.svg" alt="Piplette" />
                        <img className="block rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[100px] max-h-[100px]" src="./Designer/colorplaett.svg" alt="Farbpalette" />
                     </div>
                  </div>
                  <div className="card__body bg-bg-200/[1] p-5  mb-5 z-10 backdrop-blur-lg">
                    <div className="card__title">
                        <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Digitaler</span> <span className="text-second font-black uppercase">Künstler</span></h3>
                    </div>
                    <div className="card__text">
                      <p className="text-text-100 font-medium my-3">
                        Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                        Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                      </p>
                    </div>
                  </div>

              </div>
              <div className="card--media max-w-[450px] rounded-lg  border-bg-100 bg-bg-100">
                  <div className="card__header relative max-h-[270px]">
                    <div className="card__bg-img">
                      <img src="./AdobeStock_804070373.jpeg"  className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.6] object-cover "  alt="Geek Büro" />
                    </div>
                    <div className="card__main-img overflow-hidden w-full">
                      <img className="w-[50%] max-w-[200px] mx-auto block z-5 relative translate-y-5" src="./cartoonDev.svg" alt="Ideen Erfinder" />
                    </div>
                     <div className="mediacollection absolute top-0 left-0 w-full aspect-square animate-spin-slower">
                        <img className="block rotate-10 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[100px]" src="./Entwickler/calendar.svg" alt="Analyse" />
                        <img className="block rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[100px]" src="./Entwickler/keyboard.svg" alt="Laborflasche" />
                        <img className="block rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src="./Entwickler/mouse.svg" alt="Labor Misch Flasche" />
                        <img className="block rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[100px] max-h-[100px]" src="./Entwickler/screen.svg" alt="Labor Misch Flasche" />
                     </div>
                  </div>
                  <div className="card__body bg-bg-200/[1] p-5  mb-5 z-10 backdrop-blur-lg">
                    <div className="card__title">
                        <h3 className="card__title text-center text-[2rem]"><span className="text-prime">Browser</span><span className="text-second font-black uppercase">flüsterer</span></h3>
                    </div>
                    <div className="card__text">
                      <p className="text-text-100 font-medium my-3">
                        Durch Besprechungen mit den Kunden werden die Ziele und die hinein Wege skiziert.  <br />
                        Anhand von was erwartet ist und was im Webberreich möglich ist, werden Ideen und Konzepte Entwickelt!
                      </p>
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