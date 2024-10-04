import PageHero from "../Components/Assets/PageHero"
import Container from "../Components/Container";
import Card from "../Components/Assets/Card";
import Tools from "../Data/Tools.json"

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
                  Hallo und danke für deine Interesse!
              </p>
              <p className="pt-5">
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

              <div className="skills-list">
                {
                  Tools && (
                    Tools.map((tool, index) => (
                      <>
                        <h3 key={index} className="
                          uppercase ml-5 mt-10 mb-5 text-second font-black list-item list-disc
                        ">{tool.cat}</h3>
                        <ul className="
                        flex gap-2 md:gap-5 justify-start flex-wrap
                        md:grid md:grid-cols-3 place-items-center justify-items-center
                        p-5 border border-[#eeeeee10] bg-[#eeeeee10] rounded-lg
                        ">
                          {tool.details.map(detail => (
                            <li key={detail.id}
                              style={
                                {
                                  background:detail.bg
                                }
                              }
                              className="text-center text-xl  rounded-lg shadow-md
                              transition-all duration-100 hover:scale-[1.05] w-fit mb-5
                              "
                            >
                              <img  title={detail.name} className="p-4 block w-[5rem] aspect-square
                              md:w-[6rem]
                              " src={`./Icons/${detail.imgPath}`} alt={detail.name} />
                              <h3 className="text-sm pb-2 font-medium"
                                style={{color:`${detail.color}`}}
                              >{detail.name}</h3>
                            </li>
                          ))}
                        </ul>
                      </>  
                    ))
                  )
                }
              </div>
                
            </div>
          </Card>
          
          
          
        </Container>
      </section>
    </>
  )
}

export default About