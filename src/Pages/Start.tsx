import {  buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Assets/Card'
import Services from "../Data/Services.json"
import Projects from "../Data/Projects.json"
import Youtube from '../Components/Youtube'
import ProjectCard from '../Components/Assets/ProjectCard'



const Start = () =>  {

  const maxResult:number = 3
 
  const rewriteDate = (item:string) => {
    const dateSplit = item.split(".")
    const theDate = {
      dd:dateSplit[0],
      mm:dateSplit[1],
      yy:dateSplit[2],
    }
    return theDate
  }

const ProjectsSorted = () => {
   return Projects.sort((a,b) => {    
    const aDate = rewriteDate(a.date)
    const bDate = rewriteDate(b.date)
    const timesA = new Date(`${aDate.mm}-${aDate.dd}-${aDate.yy}`).getTime()
    const timesB = new Date(`${bDate.mm}-${bDate.dd}-${bDate.yy}`).getTime()
    return timesA - timesB
   })
}


  return (
    <>
        <section id="hero-section" className="relative hero-section" >
          <div className="hero-section__bg-animation">
              <img src="./Canvas/Hero/Moon.svg" alt="" 
              className="hero-section__moon" />

              <img src="./Canvas/Hero/Sun.svg" alt="" 
              className="hero-section__sun origin-center" />
          </div>
          <Container>
             <div className="hero 
             flex flex-col justify-end
             md:gap-2 md:flex-row-reverse md:items-center md:justify-end md:min-h-[80svh] ">
                <div className="hero__content
                p-[2rem] translate-y-[100px]
                 bg-[#00000010]
                backdrop-blur-sm 
                md:backdrop-blur-sm shadow-lg
                md:translate-y-0 md:self-end md:mb-5 
                ">
                  <h2 className="text-center">
                    <span className='block  p-0 w-full text-prime text-center md:text-left'>Ich heiße</span> 
                    <strong className="block text-[2rem] w-full font-black text-prime
                    md:text-[4rem] drop-shadow-lg
                    ">Ahmed <em className="uppercase not-italic text-second-100">Lemssiah,</em> </strong>
                    <span className="text-[1rem] md:text-[1.8rem] text-text md:text-left w-full block">ich bin Frontend <em className="uppercase not-italic text-second-100 font-black">Web</em> Entwickler</span>
                  </h2>
                  <div className="hero__call flex justify-center mt-5 gap-5 md:justify-normal">
                    <Link className={`${buttonVariants({variant:"full"})} text-bg`} to="/uebermich" >Über mich</Link>
                    <Link className={`${buttonVariants({variant:"outline"})} dark:text-prime`} to="/portfolio">Portfolio</Link>
                  </div>
                </div>
                <div className="hero__media md:w-2/5 md:self-end">
                  <div className="hero__main-image">
                    <img className="max-w-[70vw] mx-auto md:max-w-[50svh]" src="./Main/AvatarMainAnimation_2.gif" alt="Ahmed Lemssiah Avatar" />
                  </div>
                </div>
             </div>
          </Container>
          
        </section>
        <section id="leistungen-section" style={{background:'url(./AdobeStock_852213050.jpeg)', backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
          <Header variant="section">
            <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Leistungen</h2>
          </Header>
          <Container>
            <div className="service" >
                <div className="card md:flex  md:items-center  md:justify-center md:gap-10 min-h-[80svh]" >
                  <div className="card__image w-[80%] max-w-[400px] relative">
                    <div className="main-media px-5">
                      <img src="./cartoonFinder.svg" alt="Avtar Erfinder" className='animate-bounce-slow'/>
                    </div>
                    <div className="mediacollection absolute top-0 left-[-10%] w-[120%] h-full animate-spin-slower">
                      <img className="block z-10 rotate-180 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[150px]" src="./Erfinder/Element 3.svg" />
                      <img className="z-10 rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[200px]" src="./Erfinder/Mikroskop.svg" />
                      <img className="block z-10 rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src="./Erfinder/LaborMischFlasche1.svg" />
                      <img className="block z-10 rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[90px] max-h-[80px]" src="./Erfinder/LaborFlasche1.svg" />
                    </div>
                  </div>
                  <div className="card__content md:w-[30%] md:h-fit z-10 md:backdrop-blur-sm bg-[#ffffff30] p-5 rounded-lg animate-bounce-slow md:-translate-x-[100%]">
                    <h3 className="text-[2rem]"><span className="text-prime">Ideen</span><span className="text-second font-black uppercase">erfinder</span></h3>
                    <p className="text-prime-100">
                    Um die optimale Idee zu entwickeln, führe ich Besprechungen mit den Kunden, in denen Erwartungen geklärt und Ziele definiert werden. Auf dieser Grundlage erhalten die Kunden ein maßgeschneidertes Angebot.
                    </p>
                  </div>
                </div>
            </div>
          </Container>
        </section>
        <section id="latest-section" className="latest-section">
          <Header variant="section">
              <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Projekt-Ecke</h2>
              <p>Hier sind meine letzten Projekte. Die Übung macht den Meister</p>
          </Header>
          <Container>
              <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:justify-items-center'>
                {
                  Projects && ProjectsSorted().map((item,index) => (
                    index < maxResult && (
                      <ProjectCard key={`${item.title.de}${item.id}`} 
                      title={item.title.de} 
                      screenshot={item.screenshot}
                      screenshottype={item.screenshottype}
                      date={item.date}
                      location={item.location}
                      teks={item.teks}
                      type={item.type}
                      project={item.projectname}
                      projektFolder={item.projectname}
                      />
                    )
                  ))
                }

              </div>
              <Link className={`${buttonVariants({variant:'full'})} my-2`} to="portfolio">
                Mehr...
              </Link>  
          </Container>
        </section>
       <section id="youtube-section"
         onClick={(e) => {
          console.log(e.target)
        }}
       >
              <Header variant="section">
                  <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Video-Ecke</h2>
              </Header>
              <Container>
                <div className="section__content md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10  md:justify-items-center"
                
                >
                  <Youtube result={3} />

                </div>
                <Link className={`${buttonVariants({variant:'full'})} my-2`} to="videos">
                  Mehr...
                </Link>
              </Container>
       </section>
    </>
  )
}

export default Start