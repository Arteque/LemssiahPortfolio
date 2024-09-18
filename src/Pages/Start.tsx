import {  Button, buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Assets/Card'
import Services from "../Data/Services.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica, faSave, faShareAlt, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Youtube from '../Components/Youtube'


const Start = () =>  {


  

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
                p-[2rem] translate-y-[70px] 
                md:backdrop-blur-sm shadow-lg
                md:translate-y-0 md:self-end md:mb-5 
                ">
                  <h2 className="text-center">
                    <span className='block  p-0 w-full text-prime text-center md:text-left'>Ich heiße</span> 
                    <strong className="block text-[2rem] w-full font-black text-prime
                    md:text-[4rem] drop-shadow-lg
                    ">Ahmed <em className="uppercase not-italic text-second-100">Lemssiah</em> </strong>
                    <span className="text-[1rem] md:text-[1.8rem] text-text">Ich gestalte Sachen und entwickle Websites</span>
                  </h2>
                  <div className="hero__call flex justify-center mt-5 gap-5 md:justify-normal">
                    <Link className={`${buttonVariants({variant:"full"})} text-bg`} to="/kontakt" >kontakt</Link>
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
        <section id="service-section" className="section bg-bg-200 pb-[5rem] ">
          <Header variant="section">
            <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Was kann ich?</h2>
          </Header>
          <Container>
            <div className="section__content md:flex md:gap-2 md:justify-between">

              {
                Services && Services.map(item => (
                  <Card variant="default" className="card p-0 px-5 mx-auto md:mx-0 md:px-0 overflow-x-clip md:overflow-x-visible" key={item.id}>
                    <div className="card__header relative max-h-[270px]">
                        <div className="card__bg-img">
                          <img src={item.media.bg} className="absolute top-0 left-0 w-full h-full z-0 mix-blend-multiply object-cover blur-[1px]" alt={item.media.bg.replace(/[./ .de jpg svg jpeg]/g,"")} />
                        </div>
                          <div className="card__main-img overflow-hidden w-full">
                            <img className="w-[50%] max-w-[200px] mx-auto block z-5 relative translate-y-5" src={item.media.main} alt={`${item.title[1]}${item.title[2]}`} />
                          </div>
                          <div className="mediacollection absolute top-0 left-0 w-full h-[400px] animate-spin-slower">
                              { item.media.animated && item.media.animated.map((el, index) => (
                                    index == 0 ? (
                                      <img key={index}  className="block z-10 rotate-180 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                    ) : index == 1 ? (
                                      <img key={index} className="block z-10 rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                    ) : index == 2 ? (
                                      <img key={index} className="block z-10 rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                    ) : index == 3 && (
                                      <img key={index} className="block z-10 rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                    )
                              ))}
                              
                          </div>
                        </div>
                        <div className="card__body bg-bg-200/[1] p-5  mb-5 z-10 backdrop-blur-lg">
                          <div className="card__title">
                              <h3 className="card__title text-center text-[2rem]"><span className="text-prime">{item.title[1]}</span><span className="text-second font-black uppercase">{item.title[2]}</span></h3>
                          </div>
                          <div className="card__text">
                            <p className="text-text-100 font-medium my-3">
                              {item.text}
                            </p>
                          </div>
                        </div>
                  </Card>
                ))
              }
            </div>
          </Container>
        </section>
        <section id="latest-section" className="latest-section">
          <Header variant="section">
              <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Aktuelles</h2>
              <p>Da ich ein Vollzeitjob habe, habe ich leider nicht viele Zeit für meine Private Projekte. Hier ein paar davon</p>
          </Header>
          <Container>
              <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
                <Card variant="mediaCard" className="project relative group cursor-pointer  overflow-hidden bg-bg my-5 
                shadow-sm shadow-prime-200 group-hover:shadow-lg ">
                  <div className="card__header overflow-hidden">
                      <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" className="
                      transition-all duration-[5s] grayscale
                      group-hover:scale-[1.01] group-hover:grayscale-0"/>
                  </div>
                  <div className="card__body">
                    <h3 className="text-prime text-lg flex gap-2 pt-5 px-3">
                      <a href="#" title="project-title">
                        <span className="card__icon">
                          <FontAwesomeIcon icon={faGlobeAfrica} />
                        </span>
                        <span className="card__text">
                        Project Überschrift |
                        <span  className="text-text-200 text-xs"> 
                        <small> Marokko</small> - <small>29.11.2024</small>
                        </span>
                        </span>
                      </a>
                    </h3>
                    <h4 className="px-3 text-xs text-text-200">
                      <span>100 Views</span> | <span>10 Likes</span>
                    </h4>
                    <p className="card__description p-5 text-prime">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam amet vitae, esse expedita eaque eius ducimus aspernatur sunt? Soluta.
                    </p>
                  </div>
                  <div className="card__footer">
                    <ul className='absolute flex flex-col gap-2 top-2 right-[-20%] transition-all duration-[.5s]
                    group-hover:right-0 
                    '>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsUp}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsDown}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faShareAlt}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faSave}  />
                        </Button>
                      </li>
                    </ul>
                    <ul className="card__tek flex justify-end p-2 gap-1 text-text-100">
                      <li>
                        <FontAwesomeIcon icon={faHtml5} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCss3} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faJs} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faReact} />
                      </li>
                    </ul>
                  </div>
                </Card>
                <Card variant="mediaCard" className="project relative group cursor-pointer  overflow-hidden bg-bg my-5 
                shadow-sm shadow-prime-200 group-hover:shadow-lg ">
                  <div className="card__header overflow-hidden">
                      <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" className="
                      transition-all duration-[5s] grayscale
                      group-hover:scale-[1.01] group-hover:grayscale-0"/>
                  </div>
                  <div className="card__body">
                    <h3 className="text-prime text-lg flex gap-2 pt-5 px-3">
                      <a href="#" title="project-title">
                        <span className="card__icon">
                          <FontAwesomeIcon icon={faGlobeAfrica} />
                        </span>
                        <span className="card__text">
                        Project Überschrift |
                        <span  className="text-text-200 text-xs"> 
                        <small> Marokko</small> - <small>29.11.2024</small>
                        </span>
                        </span>
                      </a>
                    </h3>
                    <h4 className="px-3 text-xs text-text-200">
                      <span>100 Views</span> | <span>10 Likes</span>
                    </h4>
                    <p className="card__description p-5 text-prime">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam amet vitae, esse expedita eaque eius ducimus aspernatur sunt? Soluta.
                    </p>
                  </div>
                  <div className="card__footer">
                    <ul className='absolute flex flex-col gap-2 top-2 right-[-20%] transition-all duration-[.5s]
                    group-hover:right-0 
                    '>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsUp}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsDown}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faShareAlt}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faSave}  />
                        </Button>
                      </li>
                    </ul>
                    <ul className="card__tek flex justify-end p-2 gap-1 text-text-100">
                      <li>
                        <FontAwesomeIcon icon={faHtml5} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCss3} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faJs} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faReact} />
                      </li>
                    </ul>
                  </div>
                </Card>
                <Card variant="mediaCard" className="project relative group cursor-pointer  overflow-hidden bg-bg my-5 
                shadow-sm shadow-prime-200 group-hover:shadow-lg ">
                  <div className="card__header overflow-hidden">
                      <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" className="
                      transition-all duration-[5s] grayscale
                      group-hover:scale-[1.01] group-hover:grayscale-0"/>
                  </div>
                  <div className="card__body">
                    <h3 className="text-prime text-lg flex gap-2 pt-5 px-3">
                      <a href="#" title="project-title">
                        <span className="card__icon">
                          <FontAwesomeIcon icon={faGlobeAfrica} />
                        </span>
                        <span className="card__text">
                        Project Überschrift |
                        <span  className="text-text-200 text-xs"> 
                        <small> Marokko</small> - <small>29.11.2024</small>
                        </span>
                        </span>
                      </a>
                    </h3>
                    <h4 className="px-3 text-xs text-text-200">
                      <span>100 Views</span> | <span>10 Likes</span>
                    </h4>
                    <p className="card__description p-5 text-prime">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam amet vitae, esse expedita eaque eius ducimus aspernatur sunt? Soluta.
                    </p>
                  </div>
                  <div className="card__footer">
                    <ul className='absolute flex flex-col gap-2 top-2 right-[-20%] transition-all duration-[.5s]
                    group-hover:right-0 
                    '>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsUp}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faThumbsDown}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faShareAlt}  />
                        </Button>
                      </li>
                      <li>
                        <Button variant="roundedLight">
                            <FontAwesomeIcon icon={faSave}  />
                        </Button>
                      </li>
                    </ul>
                    <ul className="card__tek flex justify-end p-2 gap-1 text-text-100">
                      <li>
                        <FontAwesomeIcon icon={faHtml5} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCss3} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faJs} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faReact} />
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
          </Container>
        </section>
       <section>
              <Header variant="section">
                  <h2 className="text-[3.45rem] text-second-100 text-black uppercase font-black shadow-text">Youtube</h2>
              </Header>
              <Container>
                <div className="section__content md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                  <Youtube />
                </div>
              </Container>
       </section>
    </>
  )
}

export default Start