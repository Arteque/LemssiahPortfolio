import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container";
import Card from "../Components/Assets/Card";
import Tools from "../Data/Tools.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons"; // Assuming you're using brand icons
import { faHome } from "@fortawesome/free-solid-svg-icons";

const About = () => {

 

  const calcYears = (datum:string) => {
    const birthDate = new Date(datum).getTime(); // November 29, 1982 (Month is 0-based)
    const today = new Date().getTime();

    const differenceInMilliseconds = today - birthDate;
    
    // Convert milliseconds into years (1000 milliseconds = 1 second, 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day, 365.25 days = 1 year)
    const ageInYears = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
   
      return ageInYears;
}




  return (
    <>
      <PageHero pageTitle="Über mich" bgImg="./Bg/OfficeTopView.svg"/>
      <section>
        <Container >
          <Card variant="mediaCard" className="text-prime prose-p:my-1
            md:flex md:gap-10 md:justify-center md:max-w-full 
           
          ">
            <div className="card__header bg-bg px-5 pt-5 rounded-xl  h-fit">
              <div className="overflow-hidden">
                  <img src="https://res.cloudinary.com/www-arteque-de/image/upload/v1554565460/arteque/profil/amd.png" 
                  alt="Ahmed Lemssiah Profilbild" 
                  className="translate-y-4 md:translate-y-16"
                  />
              </div>
            </div>
            <div className="card__body prose-strong:text-second my-5 md:max-w-[80%]">
              
              <p>
                  Hallo und danke für deine Interesse!<br />
              Ich heiße <strong>Ahmed <span className="uppercase">Lemssiah</span></strong>, {calcYears("1982,11,29")} Jahre alt und lebe in Deutschland. 
              </p>
              <p className="pt-5">
                Ich bin gelernter <strong>Mediengestalter </strong> und arbeite seit {calcYears("2020,07,24")} Jahren als <strong>Web Entwickler</strong>.
              </p>
              <p>
                 Mit viel Leidenschaft designe und entwickle ich Webpräsenzen. 
              </p>
              <p className="pt-5">
                 - Hier ist eine noch unvollständige Liste meiner täglichen Begleiter, die sich ständig erweitert, da ich stets neue Dinge lerne.
              </p>

              {
                Tools && Tools.map((toolsgrp,index) => (
                  <div className="skills-grp" key={index}>
                    <h3 className="text-second text-xl uppercase font-bold list-item list-disc ml-5 mt-10">{toolsgrp.cat}</h3>
                    <ul className="list-item list-disc">
                        {
                          toolsgrp.details.map(item => (
                            <li key={item.id}>
                              {
                                !item.isAwesome ? (
                                  <img src={item.imgPath} alt={item.name} />
                                  
                                ) : (
                                  <FontAwesomeIcon icon={item.iconName} />
                                )
                              }
                              
                            </li>
                          ))
                        }
                    </ul>
                  </div>
                ))
              }
              
            </div>
            
          </Card>  
        </Container>
      </section>
    </>
  )
}

export default About