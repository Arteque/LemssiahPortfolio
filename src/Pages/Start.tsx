import {  buttonVariants } from '../Components/Assets/Button'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Assets/Card'
import Services from "../Data/Services.json"

function Start() {
  


  return (
    <>
        <section id="hero-section">
          <Container>
             <div className="hero md:flex md:items-center gap-2 md:justify-start md:min-h-[70svh] ">
                <div className="hero__media md:w-2/5 md:self-end">
                  <div className="hero__main-image">
                    <img className="max-w-[70vw] mx-auto md:max-w-[50svh]" src="./Main/AvatarMainAnimation_2.gif" alt="Ahmed Lemssiah Avatar" />
                    {/* <img className="max-w-[70vw] mx-auto md:max-w-[50svh]" src="./AvatarMain.svg" alt="Ahmed Lemssiah Avatar" /> */}
                  </div>
                </div>
                <div className="hero__content">
                  <h2 className="text-center">
                    <span className='block text-prime text-left'>Ich heiße</span>
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
          </Header>
          <Container>
            <div className="section__content md:flex md:gap-2 md:justify-between">

              {
                Services && Services.map(item => (
                  <Card variant="default" className="card p-0 px-5 mx-auto md:mx-0 md:px-0 overflow-x-clip" key={item.id}>
                    <div className="card__header relative max-h-[270px]">
                        <div className="card__bg-img">
                          <img src={item.media.bg} className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.6] object-cover blur-[1px]" alt={item.media.bg.replace(/[./ .de jpg svg jpeg]/g,"")} />
                        </div>
                          <div className="card__main-img overflow-hidden w-full">
                            <img className="w-[50%] max-w-[200px] mx-auto block z-5 relative translate-y-5" src={item.media.main} alt={`${item.title[1]}${item.title[2]}`} />
                          </div>
                          <div className="mediacollection absolute top-0 left-0 w-full h-[400px] animate-spin-slower">
                              { item.media.animated && item.media.animated.map((el, index) => (
                                 index == 0 ? (
                                   <img className="block z-10 rotate-10 origin-center animate-spin-slow  absolute top-0 left-[50%]  max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                 ) : index == 1 ? (
                                  <img className="block z-10 rotate-180 origin-center animate-spin-slow  absolute top-[50%] left-0 max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                 ) : index == 2 ? (
                                  <img className="block z-10 rotate-45 origin-center animate-spin-slow  absolute top-[50%] right-5 max-w-[100px] max-h-[100px]" src={el} alt={el} />
                                 ) : index == 3 && (
                                  <img className="block z-10 rotate-100 origin-center animate-spin-slow  absolute bottom-0 left-[50%] max-w-[100px] max-h-[100px]" src={el} alt={el} />
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
    </>
  )
}

export default Start